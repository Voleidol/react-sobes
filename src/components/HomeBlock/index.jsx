import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeBlock.module.scss";

const HomeBlock = () => {
  return (
    <div className={styles.home}>
      <Link to="/">
        <div className={styles.homeFlex}>Home</div>
      </Link>
    </div>
  );
};

export default HomeBlock;
