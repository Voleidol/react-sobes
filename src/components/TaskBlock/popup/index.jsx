import { useState } from "react";
import styles from "./Popup.module.scss";

const Popup = ({ shadow, setShadow, setTask }) => {
  const [stateText, setStateText] = useState("");

  const changeShadow = () => {
    if (stateText) {
      setStateText('')
      setTask()
      setShadow(!shadow);
    }
  };

  const closePopup = () => {
    setShadow(false)
  }

  const onChangeText = (e) => {
    setStateText(e.target.value)
  }

  return (
    <div className={shadow ? styles.popupMain : styles.popupMainHide}>
      <div className={styles.popup}>
        <span onClick={() => closePopup()} className={styles.spanPopup}>X</span>
        <textarea
          onChange={(e) => onChangeText(e)}
          value={stateText}
          className={styles.textareaPopup}
          name="task"
          id="textarea"
        />
        <button onClick={() => changeShadow()} className={styles.popupButton}>
          Добавить задачу
        </button>
      </div>
    </div>
  );
};

export default Popup;
