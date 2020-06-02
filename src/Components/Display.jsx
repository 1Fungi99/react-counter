import React from "react";
import "../index.css";
import FlipNumbers from "react-flip-numbers";

const Display = (props) => {
  return (
    <section className="display">
      <FlipNumbers
        height={100}
        width={50}
        color="#7FE5F0"
        background="#000000"
        play
        perspective={700}
        numbers={props.count.toString()}
        numberStyle={{ fontSize: 50 }}
        nonNumberStyle={{ fontSize: 75, color: "#7FE5F0" }}
      />
      {/* <h1>The current count is: {props.count}</h1> */}
    </section>
  );
};

export default Display;
