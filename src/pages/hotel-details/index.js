import React from "react";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import styles from "./index.module.scss";

const Index = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.images}>
        <div className={styles.image_left}></div>
        <div className={styles.images_right}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
