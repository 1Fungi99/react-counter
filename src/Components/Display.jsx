import React from "react";

const Display = (props) => {
  return (
    <section className="display">
      <h1>The current count is: {props.count}</h1>
    </section>
  );
};

export default Display;
