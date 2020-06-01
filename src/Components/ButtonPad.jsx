import React from "react";

const ButtonPad = (props) => {
  return (
    <>
      <div>
        <button onClick={() => props.handleChange(-10)}>-10</button>
        <button onClick={() => props.handleChange(-5)}>-5</button>
        <button onClick={() => props.handleChange(-2)}>-2</button>
        <button onClick={() => props.handleChange(-1)}>-1</button>
        <button onClick={() => props.handleChange(1)}>+1</button>
        <button onClick={() => props.handleChange(2)}>+2</button>
        <button onClick={() => props.handleChange(5)}>+5</button>
        <button onClick={() => props.handleChange(10)}>+10</button>
      </div>
      <div>
        <button onClick={() => props.handleReset()}>Clear</button>
      </div>
    </>
  );
};

export default ButtonPad;
