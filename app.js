const express = require('express');
const userRoute = require('./routes/user.Route');
const testRoute = require('./routes/test.Route');
const taskRoute = require('./routes/task.Route');
const connectDB = require('./config/db');

require('dotenv').config();// Load .env at the top

const app = express();
// Connect to MongoDB and start server
connectDB();

// Body parser middlewares (express built-in)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// app.use('/task', authCheck, taskRoute);

app.use('/user', userRoute);
app.use('/test', testRoute);
app.use('/task', taskRoute);

const PORT = process.env.PORT || PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.....`);
});
