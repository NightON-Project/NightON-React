import React, { useState } from "react";
import styles from "./index.module.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import logo from "../../assets/img/logo2.png";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";
import Location from "../Location";
// import Calendar from "../Calendar";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Calendar } from "primereact/calendar";

const Index = ({ inputRef }) => {
  const [windowActivated, setWindowActivated] = useState(0);
  const [date, setDate] = useState(null);

  return (
    <>
      <div
        className={`${styles.navbar} ${
          windowActivated !== 0 && styles.active_menu
        }`}
      >
        <img src={logo} alt="Airbnb" className={styles.navbar_logo} />

        <div className={styles.search_bar}>
          <div
            className={styles.search_bar_text}
            onClick={() => setWindowActivated(1)}
          >
            N'importe où
          </div>
          <div
            className={styles.search_bar_text}
            onClick={() => setWindowActivated(2)}
          >
            Quand
          </div>
          <div className={styles.search_bar_text2}>Commencer</div>
          <div className={styles.search_bar_icon_div}>
            <SearchRoundedIcon />
          </div>
        </div>
        {windowActivated !== 0 && (
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            <div
              className={`${windowActivated === 1 && styles.focus}`}
              onClick={() => setWindowActivated(1)}
            >
              {/* Destination */}
              <Location ref={inputRef} />
            </div>
            <div
              className={`${windowActivated === 2 && styles.focus}`}
              onClick={() => setWindowActivated(2)}
              style={{ border: "1px solid black", color: "black" }}
            >
              {/* Date */}
              <Calendar value={date} onChange={(e) => setDate(e.value)} />
            </div>
          </div>
        )}
        <div className={styles.profile_container}>
          <Link to="/register">
            <Button
              type="submit"
              title="Inscription"
              className="btn__primary"
            />
          </Link>
          <Link to="/login">
            <Button
              type="submit"
              title="Connexion"
              className="btn__secondary"
            />
          </Link>
        </div>
      </div>
      {windowActivated !== 0 && (
        <div
          className={styles.overlay}
          onClick={() => setWindowActivated(0)}
        ></div>
      )}
    </>
  );
};

export default Index;
