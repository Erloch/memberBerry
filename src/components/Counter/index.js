import React from "react";
import "./style.css";

function Counter(props) {
  return <h4 className="counter">{props.score}</h4>;
  console.log(props.score)
}

export default Counter;