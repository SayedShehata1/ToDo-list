import AddTodo from "../AddTodo/AddTodo";
import TodoItem from "../TodoItem/TodoItem";
import { fetchTasks, updateTask, deleteTask, addTask } from "../../API/api";
import { useEffect, useMemo, useState } from "react";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  // Set loading state to true until the tasks fetched
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch tasks from the API
    const getTasks = async () => {
      const apiTasks = await fetchTasks();
      setTasks(apiTasks);
      // Set loading to false after fetching the tasks
      setLoading(false);
    };
    getTasks();
  }, []);

  // Add Task function
  const handleAddTask = async (taskText) => {
    const newTask = { text: taskText, completed: false };
    const savedTask = await addTask(newTask);
    setTasks([...tasks, savedTask]);
  };

  // Toggle Completed Task function
  const HandleToggleCompleteTask = async (taskId) => {
    const taskToToggle = tasks.find((task) => task.id === taskId);
    const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };
    const savedTask = await updateTask(taskId, updatedTask);
    setTasks(tasks.map((task) => (task.id === taskId ? savedTask : task)));
  };

  // Remove Task function
  const handleRemoveTask = async (taskId) => {
    await deleteTask(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // memoize tasks to prevent unnecessary re-renders
  const momoizedTasks = useMemo(() => {
    return tasks.map((task) => (
      <TodoItem
        key={task.id}
        task={task}
        toggleCompletedTask={HandleToggleCompleteTask}
        removeTask={handleRemoveTask}
      />
    ));
  }, [tasks]);

  return (
    <div className={styles.todoList}>
      <h2 style={{ color: "#714d26" }}>Todo List</h2>
      <AddTodo addTask={handleAddTask} />
      {loading ? (
        <div>Loading...</div>
      ) : tasks.length === 0 ? (
        <h3>No tasks Todo</h3>
      ) : (
        <ul>{momoizedTasks}</ul>
      )}
    </div>
  );
};

export default TodoList;
