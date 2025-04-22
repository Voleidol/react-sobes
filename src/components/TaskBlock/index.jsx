import { useState } from 'react';
import Popup from './popup';
import styles from './TaskBlock.module.scss'

const TaskBlock = () => {
  const [shadow, setShadow] = useState(false);

  const changeShadow = () => {
    setShadow(true)
  }

  return (
    <div className={styles.taskblockMain}>
      <h2>ToDo List</h2>
      <button onClick={() => changeShadow()}>Добавить задачу</button>
      <Popup shadow={shadow} setShadow={setShadow} />
      
    </div>
  )
};

export default TaskBlock;
