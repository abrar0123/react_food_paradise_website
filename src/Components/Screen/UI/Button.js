import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={` ${props.custombtnStyle} ${styles.buttonstyle}`}
      type={props.type || "submit"}
      onClick={props.onclick}
    >
      {props.children}
    </button>
  );
};

export default Button;
