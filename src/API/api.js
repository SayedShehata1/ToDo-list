import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

// Fetch tasks from mock API
export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new task
export const addTask = async (task) => {
  const response = await axios.post(API_URL, task, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// Update a task
export const updateTask = async (taskId, updatedTask) => {
  const response = await axios.put(`${API_URL}/${taskId}`, updatedTask, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// Delete a task
export const deleteTask = async (taskId) => {
  await axios.delete(`${API_URL}/${taskId}`);
};
