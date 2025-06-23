
# 🗂️ Task Manager API

A fully-featured RESTful API for managing personal and team tasks.  
Built with **Node.js**, **Express**, and **MongoDB**, it includes **authentication**, **role-based access**, and **task management** with filtering, deadlines, and priorities.

## 🚀 Key Features

- ✅ Create, read, update, delete (CRUD) tasks
- 🧠 Filter tasks by status, priority, or deadline
- 🔐 JWT-based user authentication
- 👤 Role-based access (e.g., admin, user)
- 📅 Task deadlines and reminders
- 🧾 Input validation and error handling
- 🌍 Deployed and accessible online

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** + **Mongoose**
- **JWT** for auth
- **bcrypt** for password hashing
- **dotenv** for environment configuration
- **Postman** / **Insomnia** for API testing

## 📁 Project Structure

```

task-manager-api/
├── controllers/       # Request handlers
├── models/            # Mongoose schemas
├── routes/            # Express routes
├── service/           # for controller funtions
├── middleware/        # Auth, error handling
├── config/            # DB & JWT setup
├── utils/             # Helper functions
├── .env               # Environment config
├── server.js          # App entry point
└── README.md

````

## 🔐 Authentication & Roles

- Users sign up and log in with **email and password**
- Passwords are **hashed** using bcrypt
- Authenticated using **JWT tokens**
- **Admin users** can manage all tasks/users
- **Regular users** can manage their own tasks

## 🔌 API Endpoints (Sample)

### 🧑‍💻 Auth
| Method | Endpoint        | Description          |
|--------|-----------------|----------------------|
| POST   | /api/register   | Register new user    |
| POST   | /api/login      | User login           |
## ⚙️ Admin Only
| GET    | /api/users      | Get all users        |
| DELETE | /api/users/:id  | Delete a user (admin)|

### 📋 Tasks
| Method | Endpoint        | Description                |
|--------|-----------------|----------------------------|
| GET    | /api/tasks      | Get all tasks (auth)       |
| POST   | /api/tasks      | Create a new task          |
| PUT    | /api/tasks/:id  | Update task by ID          |
| DELETE | /api/tasks/:id  | Delete task by ID          |


## 🌍 Deployment

The API is deployed and accessible at:  
🔗 [Live API Link](https://your-deployment-url.com) <!-- Replace with actual URL -->

## 🧪 Running Locally

```bash
git clone https://github.com/jagritimandal/task-manager-api.git
cd task-manager-api
npm install
````

Create a `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Start the server:

```bash
npm run dev
```

## 📌 Future Ideas (Optional)

* Email notifications for due tasks
* Rate limiting & API security
* Frontend dashboard integration

```
