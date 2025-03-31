import React, { useState } from "react";
import AddTask from "./AddTask";
import styles from "./TaskBlock.module.scss";
import CustomCheckbox from "../CustomCheckbox/indes";

const TaskBlock = () => {
  const [tasks, setTasks] = useState([
    "дела",
    "работа",
    "хлеб",
    "молоко",
    "Евро",
    "Помидора",
    "Батон",
  ]);
  const [isChecked, setIsChecked] = useState({});


  const addTask = (task) => {
    setTasks((prevTasks) => {
      const uncheckedTasks = prevTasks.filter((t) => !isChecked[t]);
      const checkedTasks = prevTasks.filter((t) => isChecked[t]);
      return [task, ...uncheckedTasks, ...checkedTasks];
    });
    setIsChecked((prev) => ({ ...prev, [task]: false }));
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((elem) => elem !== task));
    setIsChecked((prev) => {
      const newChecked = { ...prev };
      delete newChecked[task];
      return newChecked;
    });
  };

  const handleCheckboxChange = (id, task) => {
    setIsChecked((prev) => {
      const newCheckedState = { ...prev, [task]: !prev[task] };
      const sortedTasks = [...tasks].sort((a, b) =>
        newCheckedState[a] === newCheckedState[b]
          ? 0
          : newCheckedState[a]
          ? 1
          : -1
      );

      setTasks(sortedTasks);
      return newCheckedState;
    });
  };

  return (
    <div className={styles.mainTaskBlock}>
      <div className={styles.wrapper}>
        <AddTask addTask={addTask} />

        {tasks.map((task, i) => (
          <div className={styles.textTask} key={i}>
            <CustomCheckbox
              isChecked={!!isChecked[task]}
              setIsChecked={() => handleCheckboxChange(i, task)}
              task={task}
              id={i}
            />

            {console.log(task.deadline)}

            <button
              onClick={() => deleteTask(task)}
              className={styles.btnDelete}
            >
              DELETE TASK
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBlock;
