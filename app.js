const express = require('express');
const userRoute = require('./routes/user.Route');
const testRoute = require('./routes/test.Route');
const taskRoute = require('./routes/task.Route');
const connectDB = require('./config/db');

// swagger doc packages
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swagger_option = require('./config/swaggerOptions.json').options;
swagger_option.apis = ['./docs/**/*.yaml'];
const specs = swaggerJsdoc(swagger_option);


require('dotenv').config();// Load .env at the top

const app = express();
// Connect to MongoDB and start server
connectDB();

// Body parser middlewares (express built-in)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', userRoute);
app.use('/test', testRoute);
app.use('/task', taskRoute);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

const PORT = process.env.PORT || PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.....`);
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});
module.exports = app;