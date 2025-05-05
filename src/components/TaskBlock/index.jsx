import { useEffect, useState } from 'react';
import Popup from './popup';
import styles from './TaskBlock.module.scss'
import CastomCheck from './CastomCheck';

const TaskBlock = () => {
  const [shadow, setShadow] = useState(false);
  const [task, setTask] = useState([]);
  console.log(task)
  const changeShadow = () => {
    setShadow(true)
  }

  useEffect(() => {
    if (shadow) {
      document.body.classList.add('body-gray');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('body-gray');
      document.body.style.overflow = '';
    }
  }, [shadow]);

  return (
    <div className={styles.taskblockMain}>
      <h2>ToDo List</h2>
      <button className={styles.addTaskBtn} onClick={() => changeShadow()}>
        Добавить задачу
      </button>
      <Popup
        setTask={setTask}
        task={task}
        shadow={shadow}
        setShadow={setShadow}
      />
      {task && <CastomCheck task={task} setTask={setTask}/>}
    </div>
  );
};

export default TaskBlock;
