import React from "react";
import styles from "./style.module.css";
import { useState } from "react";

const ChekoutUI = (props) => {
  const [count, setcount] = useState(props.quant);

  const countHandler = (event) => {
    setcount(event.target.value);
  };

  const countToAddHandler = () => {
    setcount(count + 1);
    props.addtoCart(props.ind, 1);
  };

  return (
    <>
      <div className={styles.mainCheckFlex}>
        <div className={styles.sub1CheckFlex}>
          <p>{props.name}</p>
          <p>{props.cat}</p>
          <p>{props.price}</p>
        </div>

        <div className={styles.sub1CheckFlex}>
          <div className={styles.mainCheckFlex}>
            <p>amount </p>
            <div className={styles.inpStyle}>
              <input
                type="text"
                min={0}
                value={count}
                onChange={countHandler}
              />
            </div>
          </div>

          <button className={styles.btn} onClick={countToAddHandler}>
            + Add
          </button>
        </div>
      </div>
      <div style={{ paddingTop: "15px" }}>
        <hr />
      </div>
    </>
  );
};
export default ChekoutUI;
