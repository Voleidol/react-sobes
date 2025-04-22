import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/tasklist">
        <div className={styles.textTask}>TaskList</div>
      </Link>
    </div>
  );
};

export default Header;


