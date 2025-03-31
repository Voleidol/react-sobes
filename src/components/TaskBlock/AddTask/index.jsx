import React, { useState } from "react";
import styles from "./AddTask.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


const AddTask = ({ addTask }) => {
  const [dateTask, setDateTask] = useState("");
  const [deadline, setDeadline] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState("");
  const divInputMass = ['Работа', 'Личное', 'Учёба'];

  const clickButton = () => {
    setIsOpen(true);
  };

  const onChangeTextArea = (event) => {
    setDateTask(event.target.value);
  };

  const clickInput = (elem) => {
    setChecked(elem.target.name);
  }

  const doneTask = () => {
    if (dateTask) {
      setDateTask();
      addTask(dateTask);
      setIsOpen(false);
      setChecked("");
      setDeadline(null);
    } else {
      alert("Задача не может быть пустой");
    }
  };

  const closeTask = () => {
    setDateTask("");
    setIsOpen(false);
    setChecked("");
  };

  return (
    <div className={styles.buttonsWrapper}>
      <button onClick={clickButton} className={styles.btn}>
        Добавить задачу
      </button>
      {isOpen && (
        <div className={styles.popup}>
          <textarea
            onChange={onChangeTextArea}
            value={dateTask}
            className={styles.textarea}
          />

          {divInputMass.map((elem) => (
            <div key={elem} className={styles.divInput}>
              <input
                onChange={clickInput}
                type="checkbox"
                name={elem}
                id={elem}
                checked={checked === elem}
              />
              <label htmlFor="elem">{elem}</label>
            </div>
          ))}

          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Выберите дедлайн"
          />

          <button onClick={doneTask} className={styles.doneBtn}>
            Готово
          </button>

          <button onClick={closeTask} className={styles.closeBtn}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTask;
