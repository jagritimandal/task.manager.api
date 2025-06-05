const express = require('express');
const userRoute = require('./routes/user.Route');
const testRoute = require('./routes/test.Route');
const taskRoute = require('./routes/task.Route');
const connectDB = require('./config/db');
const app = express();

require('dotenv').config();// Load .env at the top


// Body parser middlewares (express built-in)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB and start server
connectDB();

// app.use('/task', authCheck, taskRoute);

app.use('/users', userRoute);
app.use('/test', testRoute);
app.use('/tasks', taskRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.....`);
});
