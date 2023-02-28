import React from "react";
import "./style.css";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useState } from "react";
const Header = (props) => {
  const [cartDisplay, setcartDisplay] = useState(true);
  // {props.Carts.map((e) => {
  //   return <p>jj{e}</p>;
  // })}

  const cartModelHandler = () => {
    setcartDisplay(true);
    console.log("cartModelHandler");
    props.cartdisplay(cartDisplay);
    
  };
  return (
    <header>
      <div className="primary-header">
        <h1>Food Paradise React</h1>
        <div
          className="cartContainer cartContainerFlex"
          onClick={cartModelHandler}
        >
          <BsFillCartCheckFill />
          <p>Your Cart</p>
          <div className="cartCount">
            <p>{props.count}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
