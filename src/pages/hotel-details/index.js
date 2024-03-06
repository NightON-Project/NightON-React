import React from "react";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import styles from "./index.module.scss";
import hotel from "../../assets/hotels/hotel-1.jpeg";
import hotel2 from "../../assets/hotels/hotel-2.jpeg";
import hotel3 from "../../assets/hotels/hotel-3.jpeg";
import hotel4 from "../../assets/hotels/hotel-4.jpeg";
import hotel5 from "../../assets/hotels/hotel-5.jpeg";

const Index = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.images}>
        <div className={styles.image_left}>
          <img src={hotel} alt="" className={styles.left} />
        </div>
        <div className={styles.images_right}>
          <img src={hotel2} alt="" className={styles.right} />
          <img src={hotel3} alt="" className={styles.right} />
          <img src={hotel4} alt="" className={styles.right} />
          <img src={hotel5} alt="" className={styles.right} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
