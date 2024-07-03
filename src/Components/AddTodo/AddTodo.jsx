import { useState } from "react";
import styles from "./AddTodo.module.css";

const AddTodo = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addTodo}>
      <input
        type="text"
        placeholder="Add new task"
        value={taskText}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
