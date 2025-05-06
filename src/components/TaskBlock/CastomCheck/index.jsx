import styles from "./CastomCheck.module.scss";

const CastomCheck = ({task, setTask}) => {

    const completedTask = (id) => {
      const updateTask = task.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      setTask(updateTask);
    };

    const deleteTask = (id) => {
      const updateTaskDelete = () => task.filter((item) => item.id !==id);
      setTask(updateTaskDelete);
    };
    
  return (
    <div className={styles.taskList}>
      {task.map((item) => (
        <div key={item.id} className={styles.containerLabel}>
          <label className={styles.castomCheckbox}>
            <input onChange={() => completedTask(item.id)} type="checkbox" />
            <span className={styles.checkMark}></span>
            <span className={`${item.completed ? styles.completedText : ''}`}>{item.text}</span>
          </label>
          <button onClick={() => deleteTask(item.id)} className={styles.deleteTask}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CastomCheck;
