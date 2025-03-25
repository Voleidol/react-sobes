import React from "react";
import styles from "./CustomCheckbox.module.scss";

const CustomCheckbox = ({ task, isChecked, setIsChecked, id }) => {
  
  return (
    <div className={isChecked ? styles.checkboxWrapperChecked :styles.checkboxWrapper}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={setIsChecked}
        className={styles.checkboxInput}
      />
      <label htmlFor={id} className={styles.checkboxLabel}>
        <span className={styles.checkboxCustom}></span>
        <span className={isChecked ? styles.spanChecked : ''}>{task}</span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
