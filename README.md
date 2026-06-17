# Productivity Manager

A full-stack web application that helps users manage daily tasks efficiently. Users can create an account, log in securely, and manage their personal tasks with priorities, deadlines, and completion tracking.

## Features

### User Authentication

* User Signup
* User Login
* User Logout
* Protected Dashboard Access

### Task Management

* Create Tasks
* Edit Tasks
* Delete Tasks
* Mark Tasks as Completed
* View Task Description
* Set Task Priority (Low / Medium / High)
* Set Task Deadline

### User-Specific Data

* Each user can only view and manage their own tasks.
* Tasks are securely associated with the logged-in user.

### Dashboard Features

* Total Tasks Counter
* Completed Tasks Counter
* Pending Tasks Counter
* Priority Badges
* Empty State Message
* Responsive and Clean UI

## Tech Stack

### Frontend

* React.js
* React Router DOM
* JavaScript
* CSS

### Backend

* Spring Boot
* Spring Data JPA
* REST APIs

### Database

* MySQL

### Tools

* Git
* GitHub
* Postman
* IntelliJ IDEA
* VS Code

## Project Structure

```text
productivity-manager
│
├── frontend-react
│   ├── src
│   ├── pages
│   ├── services
│   └── components
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   └── config
│
└── README.md
```



### Login Page
<img width="1470" height="888" alt="Screenshot 2026-06-17 at 11 53 22 AM" src="https://github.com/user-attachments/assets/a14b7ec3-1a5e-4f68-bc16-b96a24e73067" />



### Signup Page

<img width="1470" height="884" alt="Screenshot 2026-06-17 at 11 58 48 AM" src="https://github.com/user-attachments/assets/0a85204a-9d69-4ae2-8bb6-4d95894a07c6" />


### Dashboard

<img width="1470" height="881" alt="Screenshot 2026-06-17 at 12 00 55 PM" src="https://github.com/user-attachments/assets/d18fb89b-2db5-4440-b2f5-6b16e7af4a48" />




## API Endpoints

### User APIs

```http
POST /users/signup
POST /users/login
```

### Task APIs

```http
GET /tasks/user/{userId}
POST /tasks
PUT /tasks/{id}
DELETE /tasks/{id}
```

## How to Run

### Backend

1. Open the Spring Boot project.
2. Configure MySQL in `application.properties`.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/productivity_manager
spring.datasource.username=root
spring.datasource.password=
```

3. Run the Spring Boot application.

Backend runs on:

```text
http://localhost:8080
```

### Frontend

1. Navigate to the frontend folder.

```bash
cd frontend-react
```

2. Install dependencies.

```bash
npm install
```

3. Start the application.

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## Future Enhancements

* Search Tasks
* Filter Tasks by Priority
* Task Categories
* Email Notifications
* Dark Mode
* Task Analytics Dashboard
* Cloud Deployment

## Author

Varshitha Nagam

GitHub: https://github.com/varshitha-art

## Resume Description

Developed a full-stack Productivity Manager application using React, Spring Boot, and MySQL. Implemented user authentication, user-specific task management, CRUD operations, deadline and priority tracking, protected routes, RESTful APIs, and persistent database storage.
