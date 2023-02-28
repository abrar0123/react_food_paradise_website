import React from "react";
import Card from "../../UI/Card/Card";
import styles from "../courseInput/courseother.module.css";
import Button from "../../UI/Button";
const Home = (props) => {
  const logout = () => {
    props.logout();
  };
  return (
    <Card
      flexStyle={styles.mainContainerFlex}
      customestyle={styles.mainContainer}
    >
      <div style={{ padding: "20px" }}>
        <h2 style={{ marginBottom: "20px" }}>Welcome to Dashboard</h2>
        <Button onclick={logout}>Logout</Button>
      </div>
    </Card>
  );
};

export default Home;
