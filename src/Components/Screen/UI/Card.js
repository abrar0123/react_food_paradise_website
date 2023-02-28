import React from "react";
// import "./style.module.css";
import styles from "./style.module.css";
const Card = (props) => {
  return (
    <div className={`${styles.cardContainer} ${props.customStyle}`}>
      {props.children}
    </div>
  );
};

export default Card;
