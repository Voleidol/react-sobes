import { useState } from 'react';
import Popup from './popup';
import styles from './TaskBlock.module.scss'

const TaskBlock = () => {
  const [shadow, setShadow] = useState(false);
  const [task, setTask] = useState({})

  const changeShadow = () => {
    setShadow(true)
  }

  return (
    <div className={shadow ? styles.taskblockMainShadow : styles.taskblockMain}>
      <h2>ToDo List</h2>
      <button className={styles.addTaskBtn} onClick={() => changeShadow()}>Добавить задачу</button>
      <Popup setTask={setTask} task={task} shadow={shadow} setShadow={setShadow} />
    </div>
  )
};

export default TaskBlock;
