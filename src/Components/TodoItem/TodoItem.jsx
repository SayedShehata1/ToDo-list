import styles from "./TodoItem.module.css";

const TodoItem = ({ task, toggleCompletedTask, removeTask }) => {
  const handleToggleCompletion = () => {
    toggleCompletedTask(task.id);
  };

  const handleRemoveTask = () => {
    removeTask(task.id);
  };

  return (
    <li className={`${styles.todoItem} `}>
      <div className={styles.taskText}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleCompletion}
        />
        <span className={`${task.completed ? styles.completed : ""}`}>
          {task.text}
        </span>
      </div>
      <button onClick={handleRemoveTask} style={{ text_decoration: "none" }}>
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
