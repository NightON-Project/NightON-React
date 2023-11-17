import React from "react";
import styles from "./index.module.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import BasicMenu from "./ProfileMenu";

const index = () => {
  return (
    <div className={styles.navbar}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png"
        alt="Airbnb"
        className={styles.navbar_logo}
      />
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
        <div className={styles.nighton_home}>
          <LanguageRoundedIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className={styles.profile}>
          <BasicMenu />
        </div>
      </div>
    </div>
  );
};

export default index;
