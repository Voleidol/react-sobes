import { useEffect, useState } from 'react';
import Popup from './popup';
import styles from './TaskBlock.module.scss'
import CastomCheck from './CastomCheck';

const TaskBlock = () => {
  const [shadow, setShadow] = useState(false);
  const [task, setTask] = useState([]);
  const [filter, setFilter] = useState('Все')
  const selectedMass = ['Все', 'Выполненные', 'Невыполненные'];

  const filterSelect = task
    .slice()
    .sort((a, b) => a.completed - b.completed)
    .filter((item) => {
      if (filter === "Выполненные") return item.completed;
      if (filter === "Невыполненные") return !item.completed;
      return true;
    });

  const changeShadow = () => {
    setShadow(true)
  };

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
      <div className={styles.headerTaskBlock}>
        <button className={styles.addTaskBtn} onClick={() => changeShadow()}>
          Добавить задачу
        </button>

        <select
          className={styles.select}
          value={filter}
          name="select"
          onChange={(e) => setFilter(e.target.value)}
        >
          {selectedMass.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </div>

      <Popup
        setTask={setTask}
        task={task}
        shadow={shadow}
        setShadow={setShadow}
      />
      {task && <CastomCheck filterSelect={filterSelect} task={task} setTask={setTask} />}
    </div>
  );
};

export default TaskBlock;
