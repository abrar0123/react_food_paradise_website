import React from "react";
import Card from "../UI/Card";
import styles from "./style.module.css";
import Button from "../../Screen/UI/Button";
const CartModel = (props) => {
  let filteredFood = props.filteredFood;

  const getIDIncrement = (e,ind) => {
    props.quntityIncreament(e,ind);
  };
  const getIDDecrement = (e,ind) => {
    props.quntityDecreament(e,ind);
  };

  const getIDDelete = (e) => {
    props.getIDDelete(e);
  };

  const hidehandler = () => {
    props.cartDisplay(false);
  };

  const orderHandler = () => {
    props.orderHandler();
  };

  return (
    <Card customStyle={styles.customContainer}>
      <h2>Cart Items</h2>

      {filteredFood.length > 0 &&
        filteredFood.map((e, i) => {
        
          return (
            <>
              <div className={styles.mainCartFlex} key={i}>
                <div className={styles.subCartFlex}>
                  <div className={styles.sub2CartFlex}>
                    <div>
                      <p>{e.name}</p>
                    </div>
                    <div>
                      {e.price} ,{" "}
                      <p style={{ display: "inline" }}> {e.quant}</p>{" "}
                      <p style={{ display: "inline" }}> {e.subtotal}</p>{" "}
                    </div>
                  </div>
                </div>
                <div className={styles.subCartFlex}>
                  <div>
                    <button onClick={() => getIDDecrement(e.id,i)}>-</button>
                    <button onClick={() => getIDIncrement(e.id,i)}>+</button>
                    {/* <button onClick={() => getIDDelete(e.id)}>x</button> */}
                  </div>
                </div>
              </div>
              <div className={styles.hrstyle}>
                <hr />
              </div>
            </>
          );
        })}
      <div className={styles.btncontainer}>
        <h3>Total Amount</h3>
        <h4>pkr. {props.GrandTotal}</h4>
      </div>
      <div className={styles.btncontainer}>
        <Button custombtnStyle={styles.customBtn} onclick={hidehandler}>
          Cancel
        </Button>
        <Button onclick={orderHandler}>Order... </Button>
      </div>
      {/* <button>click me</button> */}
    </Card>
  );
};

export default CartModel;
