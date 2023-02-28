import React from "react";
import Header from "./Components/Screen/Header/header";
import Model from "./Components/Screen/checkoutModel/Model";
import Checkout from "./Components/Screen/Checkout/Checkout";
import { useState } from "react";
import CartModel from "./Components/Screen/CartModel/CartModel";

const food = [
  {
    id: 0,
    name: "Zinger Burger",
    cat: "Fast Foods",
    price: 200,
    subtotal: 0,

    quant: 1,
  },
  {
    id: 1,
    name: "Chicken Karahi",
    cat: "best desi foood",
    price: 900,
    quant: 1,
    subtotal: 0,
  },
  {
    id: 2,
    name: "Mutton Karahi",
    cat: "best desi foood",
    price: 1950,
    subtotal: 0,
    quant: 1,
  },
  {
    id: 3,
    name: "Fajita Pizza ",
    cat: "Fast Foods",
    price: 600,
    subtotal: 0,
    quant: 1,
  },
  {
    id: 4,
    name: "Special Gurr Tea ",
    cat: "best tea time foood",
    price: 80,
    subtotal: 0,
    quant: 1,
  },
];

function App() {
  const [cartIndex, setcartIndex] = useState([]);
  const [foods, setfoods] = useState(food);
  const [count, setcount] = useState(0);
  const [cartDisplay, setcartDisplay] = useState(false);
  const [cartFoods, setcartFoods] = useState([]);

  const addtoCart = (id, quant) => {
    console.log("ind___", id);
    let obj = { id: id, quant: quant };

    // console.log("obj_id:", obj.id);

    setcount(count + obj.quant);
    let itemIDFound = cartIndex.some((e) => {
      return e.id === obj.id;
    });

    // at unique id

    if (itemIDFound === false) {
      let p = [];
      p.push(foods[id]);
      setcartFoods((pe) => {
        return [...pe, ...p];
      });

      setcartIndex((pe) => {
        return [...pe, obj];
      });

      // when user again add same item
    } else if (itemIDFound === true) {
      let m = [...cartFoods];
      m[id].quant++;
      m[id].subtotal = m[id].price * m[id].quant;
      setcartFoods(m);
      // let p = [...foods];
      // p[obj.id].quant++;
      // p[obj.id].subtotal = p[obj.id].price * p[obj.id].quant;
      // setfoods(p);
    }
  };

  const cartdisplay = (value) => {
    setcartDisplay(value);
  };
  const hidehandler = (value) => {
    setcartDisplay(value);
  };

  console.log("cartFoods", cartFoods);

  const quntityDecreament = (id, ind) => {
    console.log("idreceive", ind);
    let p = [...cartFoods];
    if (p[ind].quant > 0) {
      p[ind].quant--;
      p[ind].subtotal = p[ind].price * p[ind].quant;
      setcartFoods(p);
      setcount(count - 1);
    } else {
      try {
        let g1 = [...cartIndex];
        let g2 = g1.filter((e) => {
          return e.id !== id;
        });
        setcartIndex(g2);
        let p1 = [...cartFoods];
        let g = p1.filter((e) => {
          return e.id !== id;
        });
        console.log("iddd__", g);

        setcartFoods(g);
      } catch (error) {
        console.log("errorRemove___", error);
      }
    }
  };
  console.log("cartFoods__:", cartFoods);

  const quntityIncreament = (id, ind) => {
    let p = [...cartFoods];
    p[ind].quant++;
    p[ind].subtotal = p[ind].price * p[ind].quant;
    setcartFoods(p);
    setcount(count + 1);
  };

  // for (let p of cartIndex) {
  //   const y = p.id;
  //   filtefood.push(foods[y]);
  // }

  const orderHandler = () => {
    console.log("cartFoods", cartFoods);
    console.log("cartindex", cartIndex);
    setcartFoods([]);
    setcartIndex([]);
    // setcartFoods(cartFoods);
  };

  let p = [];
  for (let t of foods) {
    const e = t.subtotal;
    p.push(e);
  }
  let grand = p.reduce((a, b) => {
    return a + b;
  });

  return (
    <React.Fragment>
      <Header count={count} cartdisplay={cartdisplay} />
      {cartDisplay && (
        <CartModel
          filteredFood={cartFoods}
          quntityIncreament={quntityIncreament}
          quntityDecreament={quntityDecreament}
          GrandTotal={grand}
          cartDisplay={hidehandler}
          orderHandler={orderHandler}
        />
      )}

      <Model />
      <Checkout food={foods} addtoCart={addtoCart} />
    </React.Fragment>
  );
}

export default App;
