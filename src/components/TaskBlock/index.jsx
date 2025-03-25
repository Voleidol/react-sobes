import React, { useState } from "react";
import AddTask from "./AddTask";
import styles from "./TaskBlock.module.scss";
import CustomCheckbox from "../CustomCheckbox/indes";

const TaskBlock = () => {

  const [isChecked, setIsChecked] = useState({});
  const [tasks, setTasks] = useState(['дела', 'работа', 'хлеб', 'молоко']);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter(t => t !== task));
  };

  const handleCheckboxChange = (id) => {
    setIsChecked({
      ...isChecked,
      [id]: !isChecked[id],
    });
  };

  return (
    <div className={styles.mainTaskBlock}>
      <div className={styles.wrapper}>
        <AddTask addTask={addTask} />

        {tasks.map((task, i) => (
          <div className={styles.textTask}>
            <CustomCheckbox
              isChecked={isChecked[i]}
              setIsChecked={()=> handleCheckboxChange(i)}
              task={task}
              id={i}
            />
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
