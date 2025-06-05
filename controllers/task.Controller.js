const TaskService = require('../services/task.Service');
const allowedUpdates = ['description', 'completed'];

const taskController ={
  createTask : async (req, res) => {
    try {
      const task = await TaskService.createTask({
        ...req.body,
        owner: req.user._id
      });
      res.status(201).send(task);
    } catch (e) {
      res.status(400).send(e);
    }
  },

  getAllTasks : async (req, res) => {
    try {
      const tasks = await TaskService.getTasksByOwner(req.user._id);
      res.send(tasks);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  getTaskById : async (req, res) => {
    try {
      const task = await TaskService.getTaskByIdAndOwner(req.params.id, req.user._id);
      if (!task) return res.status(404).send();
      res.send(task);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  updateTask : async (req, res) => {
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
      const task = await TaskService.updateTaskByIdAndOwner(req.params.id, req.user._id, req.body);
      if (!task) return res.status(404).send();
      res.send(task);
    } catch (e) {
      res.status(400).send(e);
    }
  },

  deleteTask : async (req, res) => {
    try {
      const task = await TaskService.deleteTaskByIdAndOwner(req.params.id, req.user._id);
      if (!task) return res.status(404).send();
      res.send(task);
    } catch (e) {
      res.status(500).send(e);
    }
  }
};
module.exports =taskController;
