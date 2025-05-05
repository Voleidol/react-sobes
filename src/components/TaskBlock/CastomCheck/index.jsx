import styles from "./CastomCheck.module.scss";

const CastomCheck = ({task, setTask}) => {

    const completedTask = (id) => {
      const updateTask = task.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      setTask(updateTask);
    };
    
  return (
    <div className={styles.taskList}>
      {task.map((item) => (
        <div className={styles.containerLabel}>
          <label key={item.id} label className={styles.castomCheckbox}>
            <input onChange={() => completedTask(item.id)} type="checkbox" />
            <span className={styles.checkMark}></span>
            <span className={`${item.completed ? styles.completedText : ''}`}>{item.text}</span>
          </label>
          <button className={styles.deleteTask}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CastomCheck;
