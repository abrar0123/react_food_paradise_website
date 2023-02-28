import React from "react";
import Card from "../UI/Card";
import styles from "./style.module.css"
export default function Model() {
  return <Card customStyle={styles.customeModel}>
    <div>
        <h2>
            Delicious Food, Delivered to You
        </h2>
        <p>choose your favourite food from our broad section of availablee </p>
        <p>we make sure that you get fresh annd ontime food at you home just tap order </p>    
    </div>
  </Card>;
}
