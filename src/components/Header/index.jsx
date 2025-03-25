import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/tasklist">
        <div className={styles.textTask}>TaskList</div>
      </Link>
      <Link to="/website">
        <div className={styles.textTask}>Задача 2</div>
      </Link>
    </div>
  );
};

export default Header;


