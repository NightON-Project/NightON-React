import * as React from "react";
import styles from "./index.module.scss";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={styles.profile_flex}
      >
        <MenuIcon sx={{ fontSize: "1.3rem" }} />
        <AccountCircleRoundedIcon sx={{ fontSize: "1.3rem" }} />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            minWidth: "200px",
            borderRadius: "1rem",
            marginTop: "1rem",
            boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
          },
        }}
      >
        <MenuItem className={styles.menu_items} onClick={handleClose}>
          Signup
        </MenuItem>
        <MenuItem className={styles.menu_items} onClick={handleClose}>
          Signin
        </MenuItem>
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--grey)",
            width: "100%",
          }}
        />
        <MenuItem className={styles.menu_items} onClick={handleClose}>
          NightOn Your home
        </MenuItem>
        <MenuItem className={styles.menu_items} onClick={handleClose}>
          Host your home
        </MenuItem>
        <MenuItem className={styles.menu_items} onClick={handleClose}>
          Aide
        </MenuItem>
      </Menu>
    </div>
  );
}
