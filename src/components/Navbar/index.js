import React from "react";
import styles from "./index.module.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BasicMenu from "./ProfileMenu";
import logo from "../../assets/img/logo.png";

const index = () => {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="Airbnb" className={styles.navbar_logo} />
      <div className={styles.search_bar}>
        <div className={styles.search_bar_text}>Any Where</div>
        <div className={styles.search_bar_text}>Any Week</div>
        <div className={styles.search_bar_text2}>Add guests</div>
        <div className={styles.search_bar_icon_div}>
          <SearchRoundedIcon />
        </div>
      </div>
      <div className={styles.profile_container}>
        <div className={styles.nighton_home}>NightOn Your Home</div>

        <div className={styles.profile}>
          <BasicMenu />
        </div>
      </div>
    </div>
  );
};

export default index;
