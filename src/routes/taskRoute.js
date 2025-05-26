const express = require('express');
const auth = require('../middleware/verifyToken');
const verifyToken =require("../middleware/auth");
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require('../Controllers/taskController');

const router = new express.Router();

router.post('/tasks', auth, createTask);
router.get('/tasks', verifyToken, getAllTasks);
router.get('/tasks/:id', verifyToken, getTaskById);
router.patch('/tasks/:id', verifyToken, updateTask);
router.delete('/tasks/:id', verifyToken, deleteTask);

module.exports = router;
