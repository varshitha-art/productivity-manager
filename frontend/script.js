const loginForm = document.getElementById("loginForm");

if (loginForm) {

  loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
      alert("Please fill all fields");
    } 
    
    else {
      alert("Login successful");
    }

  });

}

const signupForm = document.getElementById("signupForm");

if (signupForm) {

  signupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill all fields");
    }

    else if (password !== confirmPassword) {
      alert("Passwords do not match");
    }

    else {
      alert("Signup successful");
    }

  });

}

const togglePassword = document.getElementById("togglePassword");

if (togglePassword) {

  togglePassword.addEventListener("click", function () {

    const passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } 
    
    else {
      passwordInput.type = "password";
    }

  });

}


const addTaskButton = document.getElementById("addTaskButton");

if (addTaskButton) {

  addTaskButton.addEventListener("click", function () {

    const taskTitle = prompt("Enter task title");

    if (taskTitle === "" || taskTitle === null) {
      return;
    }

    const taskGrid = document.getElementById("taskGrid");

    const taskCard = document.createElement("article");

    taskCard.classList.add("task-card");

    taskCard.innerHTML = `
      <h2>${taskTitle}</h2>

      <p><strong>Deadline:</strong> No deadline</p>

      <p>
        <strong>Status:</strong>
        <span class="status">Pending</span>
      </p>

      <button class="complete-button">
        Complete
      </button>

      <button class="delete-button">
        Delete
      </button>
    `;

    taskGrid.appendChild(taskCard);

    const completeButton = taskCard.querySelector(".complete-button");

    completeButton.addEventListener("click", function() {

      const statusText = taskCard.querySelector(".status");

      statusText.textContent = "Completed";

      taskCard.style.backgroundColor = "#d1fae5";

      completeButton.textContent = "Completed";

      completeButton.disabled = true;

    });

    const deleteButton = taskCard.querySelector(".delete-button");

    deleteButton.addEventListener("click", function() {

      taskCard.remove();

});

  });

}

const completeButtons = document.querySelectorAll(".complete-button");

completeButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    const taskCard = button.parentElement;

    const statusText = taskCard.querySelector(".status");

    statusText.textContent = "Completed";

    taskCard.style.backgroundColor = "#d1fae5";

    button.textContent = "Completed";

    button.disabled = true;

  });

});


const deleteButtons = document.querySelectorAll(".delete-button");

deleteButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    const taskCard = button.parentElement;

    taskCard.remove();

  });

});