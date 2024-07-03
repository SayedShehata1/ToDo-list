const TodoItem = ({ task, toggleCompletedTask, removeTask }) => {
  const handleToggleCompletion = () => {
    toggleCompletedTask(task.id);
  };

  const handleRemoveTask = () => {
    removeTask(task.id);
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleCompletion}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={handleRemoveTask}>Remove</button>
    </div>
  );
};

export default TodoItem;
