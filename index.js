const express = require('express');
require('./db/mongoose');
const userRoute = require('./src/routes/userRoute');
const testRoute = require('./src/routes/testRoute');
const taskRoute = require('./src/routes/taskRoute');

const app = express();

// Body parser middlewares (express built-in)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.use('/task', authCheck, taskRoute);

app.use('/user', userRoute);
app.use('/test', testRoute);
app.use('/task', taskRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.....`);
});
