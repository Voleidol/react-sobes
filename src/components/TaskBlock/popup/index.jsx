import { useEffect, useRef, useState } from "react";
import styles from "./Popup.module.scss";

const Popup = ({ shadow, setShadow, setTask }) => {
  const [stateText, setStateText] = useState("");
  const idCounter = useRef(0);
  const textAreaFocus = useRef(null);

  const upperLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  const changeShadow = () => {
    if (stateText) {
      setStateText('')
      setTask(prev => [
        ...prev,
        {
          id: idCounter.current++,
          text: upperLetter(stateText),
          completed: false
        }
      ]);
      setShadow(!shadow);
    }
  };

  const closePopup = () => {
    setStateText('');
    setShadow(false)
  }

  const onChangeText = (e) => {
    setStateText(e.target.value)
  }

  useEffect(() => {
    if(textAreaFocus.current) {
      textAreaFocus.current.focus();
    }
  }, [shadow]);

  return (
    <div className={shadow ? styles.popupMain : styles.popupMainHide}>
      <div className={styles.popup}>
        <span onClick={() => closePopup()} className={styles.spanPopup}>X</span>
        <textarea
          ref={textAreaFocus}
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
