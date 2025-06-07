# Task Manager API

A robust and scalable Task Manager API built with Node.js, Express, and MongoDB. This API enables users to create tasks, update their status, and assign them to users with secure authentication using JWT and OAuth.

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose)
- **JWT** for authentication
- **OAuth** (e.g., Google OAuth)

## 🚀 Features

- User registration and authentication (JWT & OAuth)
- Create, update, delete tasks
- Assign tasks to specific users
- Update task status
- Secure access with authentication middleware

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/task-manager-api.git
   cd task-manager-api
2. Install dependencies
npm install
3. Set up environment variables
  Create a .env file in the root directory and add the following:
      PORT=5000
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      OAUTH_CLIENT_ID=your_google_oauth_client_id
      OAUTH_CLIENT_SECRET=your_google_oauth_client_secret
4. Start the development server
    node index.js
The server should now be running at http://localhost:3000.
5. Project Structure
       ├── controllers/
       ├── middleware/
       ├── models/
       ├── routes/
       ├── utils/
       ├── .env
       ├── server.js
       ├── index.js
      

   
