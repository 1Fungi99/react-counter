import React from "react";
import Display from "./Display";
import ButtonPad from "./ButtonPad";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleChange = (val) => {
    setCount(count + val);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      {/* Passing State to display */}
      <Display count={count} />
      {/* Passing functions to child */}
      <ButtonPad handleChange={handleChange} handleReset={handleReset} />
    </div>
  );
};

export default Counter;
