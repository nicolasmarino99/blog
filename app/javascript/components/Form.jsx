import React, { useContext, useState } from "react";
import { getProduct } from "../api";
import { TitleContext } from "../contexts/TitleContextProvider";
import Modal from "./Modal";

const Form = () => {
  const { setTitle } = useContext(TitleContext);
  const [bag, setBag] = useState({
    length: "",
    width: "",
    height: "",
    weight: "",
  });

  const { length, width, height, weight } = bag;

  const handleChange = (e) =>
    setBag((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name } = await getProduct(bag);
    await setTitle(name || "no bag matched your specification");
    setTimeout(() => {
      setTitle("");
    }, 5000);
  };

  return (
    <>
      <Modal />
      <div className="Wrapper">
        <form onSubmit={onSubmit}>
          <div className="Input">
            <input
              className="Input-text"
              name="length"
              onChange={handleChange}
              placeholder="your length number is in inches"
              type="text"
              value={length}
            />
            <label htmlFor="input" className="Input-label">
              length
            </label>
          </div>
          <div className="Input">
            <input
              className="Input-text"
              name="width"
              onChange={handleChange}
              placeholder="your width number is in inches"
              type="text"
              value={width}
            />
            <label htmlFor="input" className="Input-label">
              width
            </label>
          </div>
          <div className="Input">
            <input
              className="Input-text"
              name="height"
              onChange={handleChange}
              placeholder="your height number is in inches"
              type="text"
              value={height}
            />
            <label htmlFor="input" className="Input-label">
              height
            </label>
          </div>
          <div className="Input">
            <input
              className="Input-text"
              name="weight"
              onChange={handleChange}
              placeholder="Create new title"
              type="text"
              value={weight}
            />
            <label htmlFor="input" className="Input-label">
              weight
            </label>
          </div>
          <input type="submit" value="calculate" />
        </form>
      </div>
    </>
  );
};

export default Form;
