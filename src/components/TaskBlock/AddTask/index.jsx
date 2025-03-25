import React, { useRef, useState } from 'react'
import styles from "./AddTask.module.scss";

const AddTask = ({addTask}) => {

  const [dateTask, setDateTask] = useState('');
  const[isOpen, setIsOpen] = useState(false);

  const clickButton = () => {
    setIsOpen(true);
  }

  const onChangeTextArea = (event) => {
    setDateTask(event.target.value);
  };

  const doneTask = () => {
    setDateTask();
    addTask(dateTask);
    setIsOpen(false);
  };

  const closeTask = () => {
    setDateTask('');
    setIsOpen(false);
  }

  return (
    <div className={styles.buttonsWrapper}>
        <button onClick={clickButton} className={styles.btn}>Добавить задачу</button>
        {isOpen && <div className={styles.popup}>
          <textarea onChange={onChangeTextArea} value={dateTask} className={styles.textarea} />
          <button onClick={doneTask} className={styles.doneBtn}>Готово</button>
          <button onClick={closeTask} className={styles.closeBtn}>X</button>
        </div>}
    </div>
  )
}

export default AddTask