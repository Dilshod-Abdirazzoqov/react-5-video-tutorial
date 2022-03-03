import React from "react";
import "./MyButton.css";
const Mybutton = (props) => {
  return <button className={props.styleB}>{props.children}</button>;
};

export default Mybutton;
