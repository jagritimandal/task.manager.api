const express = require('express');
const userRoute = require('./src/routes/userRoute');
const testRoute = require('./src/routes/testRoute');
const taskRoute = require('./src/routes/taskRoute');
const connectDB = require('./db/mongoose');
const app = express();

// Body parser middlewares (express built-in)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectDB();

// app.use('/task', authCheck, taskRoute);

app.use('/users', userRoute);
app.use('/test', testRoute);
app.use('/tasks', taskRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.....`);
});
