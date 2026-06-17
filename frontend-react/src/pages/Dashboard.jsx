import { useState, useEffect } from "react";
import {
  getTasksByUser,
  createTask,
  deleteTask,
  updateTask
} from "../services/taskService.js";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [priority, setPriority] = useState("Low");
const [deadline, setDeadline] = useState("");
  const totalTasks = tasks.length;

const completedTasks = tasks.filter(
  (task) => task.status === "Completed"
).length;

const pendingTasks = tasks.filter(
  (task) => task.status !== "Completed"
).length;

  const navigate = useNavigate();
  

useEffect(() => {

  const userId = localStorage.getItem("userId");
console.log("Dashboard userId:", userId);
  if (!userId) {
    navigate("/login");
    return;
  }

  loadTasks();

}, []);


async function loadTasks() {
  try {

    const userId = localStorage.getItem("userId");

    const data = await getTasksByUser(userId);

    setTasks(data);

  } catch (error) {
    console.error("Error loading tasks:", error);
  }
}



async function editTask(id) {

  const task = tasks.find((task) => task.id === id);

  const newTitle = prompt("Edit title", task.title);

  if (!newTitle) return;

  const updatedTask = {
    ...task,
    title: newTitle
  };

  try {

    const savedTask = await updateTask(id, updatedTask);

    setTasks(
      tasks.map((task) =>
        task.id === id ? savedTask : task
      )
    );

  } catch (error) {

    console.error(error);

  }

}




  async function addTask() {
  const userId = localStorage.getItem("userId");

const newTask = {
  title,
  description,
  priority,
  deadline,
  status: "Pending",
  user: {
    id: userId
  }
};

  try {

    const savedTask = await createTask(newTask);

    setTasks([...tasks, savedTask]);

    setTitle("");
    setDescription("");
    setPriority("Low");
    setDeadline("");

  } catch (error) {

    console.error(error);

  }

}
  



 async function completeTask(id) {
  try {
    const taskToUpdate = tasks.find((task) => task.id === id);

    const updatedTask = {
      ...taskToUpdate,
      status: "Completed"
    };

    const savedTask = await updateTask(id, updatedTask);

    setTasks(
      tasks.map((task) =>
        task.id === id ? savedTask : task
      )
    );

  } catch (error) {
    console.error("Error updating task:", error);
  }
}



  async function handleDeleteTask(id) {
  try {
    const confirmDelete = window.confirm(
  "Are you sure you want to delete this task?"
);

if (!confirmDelete) return;

await deleteTask(id);

    setTasks(tasks.filter((task) => task.id !== id));
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}

function handleLogout() {

  localStorage.removeItem("userId");
  localStorage.removeItem("userEmail");

  navigate("/login");

}

  return (

    <main>

      <div className="dashboard-header">
  <h1>Productivity Manager</h1>

  <button onClick={handleLogout}>
    Logout
  </button>
</div>

<h3>Total Tasks: {totalTasks}</h3>
<h3>Completed: {completedTasks}</h3>
<h3>Pending: {pendingTasks}</h3>


<div className="task-form">

  <input
    type="text"
    placeholder="Task Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />

  <input
    type="text"
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />

  <input
    type="date"
    value={deadline}
    onChange={(e) => setDeadline(e.target.value)}
  />

  <select
    value={priority}
    onChange={(e) => setPriority(e.target.value)}
  >
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>
  </select>

  <button onClick={addTask}>
    Add Task
  </button>

</div>
  







      

        {
  tasks.length === 0 ? (

    <div>
      <h3>No tasks available.</h3>
      <p>Create your first task.</p>
    </div>

  ) : (

    tasks.map((task) => (

      <div
        key={task.id}
         style={{
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "20px",
  margin: "20px 0",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
}}
>
        <h2>{task.title}</h2>

        <p>Status: {task.status}</p>

        <p>
  Priority:
  <span
    style={{
      marginLeft: "8px",
      padding: "4px 8px",
      borderRadius: "6px",
      fontWeight: "bold",
      backgroundColor:
        task.priority?.toLowerCase() === "high"
          ? "#ffcccc"
          : task.priority?.toLowerCase() === "medium"
          ? "#fff0b3"
          : "#ccffcc"
    }}
  >
    {task.priority}
  </span>
</p>

        <p>Due: {task.deadline || "N/A"}</p>

        <p>description: {task.description || "N/A"}</p>

        <button
  onClick={() => editTask(task.id)}
>
  Edit
</button>

        <button
          onClick={() => completeTask(task.id)}
        >
          Complete
        </button>

        <button
          onClick={() => handleDeleteTask(task.id)}
        >
          Delete
        </button>

      </div>

    ))

  )
}

      

    </main>

  );

}

export default Dashboard;