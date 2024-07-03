import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { fetchTasks, updateTask, deleteTask } from "../../API/api";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the API
    const getTasks = async () => {
      const apiTasks = await fetchTasks();
      setTasks(apiTasks);
    };
    getTasks();
  }, []);

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

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodo />
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleCompletedTask={HandleToggleCompleteTask}
          removeTask={handleRemoveTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
