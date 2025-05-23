const express = require('express');
const auth = require('../middleware/verifyToken');
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require('../Controllers/taskController');

const router = new express.Router();

router.post('/tasks', auth, createTask);
router.get('/tasks', auth, getAllTasks);
router.get('/tasks/:id', auth, getTaskById);
router.patch('/tasks/:id', auth, updateTask);
router.delete('/tasks/:id', auth, deleteTask);

module.exports = router;
