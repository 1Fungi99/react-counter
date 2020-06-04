import React from "react";
import "../index.css";

const ButtonPad = (props) => {
  return (
    <>
      <div class="button-container">
        <div className="negative-container">
          <button onClick={() => props.handleChange(-10000)}>-10000</button>
          <button onClick={() => props.handleChange(-1000)}>-1000</button>
          <button onClick={() => props.handleChange(-100)}>-100</button>
          <button onClick={() => props.handleChange(-10)}>-10</button>
          <button onClick={() => props.handleChange(-5)}>-5</button>
          <button onClick={() => props.handleChange(-2)}>-2</button>
          <button onClick={() => props.handleChange(-1)}>-1</button>
        </div>
        <div className="positive-container">
          <button onClick={() => props.handleChange(1)}>+1</button>
          <button onClick={() => props.handleChange(2)}>+2</button>
          <button onClick={() => props.handleChange(5)}>+5</button>
          <button onClick={() => props.handleChange(10)}>+10</button>
          <button onClick={() => props.handleChange(100)}>+100</button>
          <button onClick={() => props.handleChange(1000)}>+1000</button>
          <button onClick={() => props.handleChange(10000)}>+10000</button>
        </div>
        <button className="clear-button" onClick={() => props.handleReset()}>
          <h1 className="rotate">CLEAR</h1>
        </button>
      </div>
      <div></div>
    </>
  );
};

export default ButtonPad;
