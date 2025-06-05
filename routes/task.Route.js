const express = require('express');
const verifyToken =require("../middleware/auth");
const taskController = require('../controllers/task.Controller');

const router = new express.Router();

router.post('/tasks', verifyToken, taskController.createTask);
router.get('/tasks', verifyToken, taskController.getAllTasks);
router.get('/tasks/:id', verifyToken, taskController.getTaskById);
router.patch('/tasks/:id', verifyToken, taskController.updateTask);
router.delete('/tasks/:id', verifyToken, taskController.deleteTask);

module.exports = router;
