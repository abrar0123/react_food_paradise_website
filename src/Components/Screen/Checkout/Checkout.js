import React from "react";
import Card from "../UI/Card";
import styles from "./style.module.css";
import ChekoutUI from "./ChekoutUI";
export default function Checkout(props) {
  return (
    <Card customStyle={styles.customCheckout}>
      <h2>Checkout</h2>
      {props.food.map((e, index) => {
        return (
          <div className={styles.checkoutStyle}>
            <ChekoutUI
              key={index}
              ind={index}
              id={e.id}
              name={e.name}
              cat={e.cat}
              price={e.price}
              quant={e.quant}
              addtoCart={props.addtoCart}
            />
          </div>
        );
      })}
    </Card>
  );
}
