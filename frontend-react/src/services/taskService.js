const API_URL = "http://localhost:8080/tasks";

// GET all tasks
export async function getTasks() {
  const response = await fetch(API_URL);
  return await response.json();
}

// CREATE task
export async function createTask(task) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  return await response.json();
}

// DELETE task
export async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}

// UPDATE task
export async function updateTask(id, updatedTask) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  });

  return await response.json();
}

export async function login(user) {
  const response = await fetch(
    "http://localhost:8080/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  return await response.json();
}

export async function getTasksByUser(userId) {
  const response = await fetch(
    `http://localhost:8080/tasks/user/${userId}`
  );

  return await response.json();
}