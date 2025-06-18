const taskService = require('../services/task.service');

const taskController = {
  // Create a task
  createTask : async (req, res) => {
    try {
      const task = await taskService.createTask({
        ...req.body,
        createdBy: req.user._id,
      });
      res.status(201).json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  // Get all tasks (admin) or only user’s tasks
  getTasks : async (req, res) => {
    try {
      const tasks = req.user.role === 'admin'
        ? await taskService.getAllTasks()
        : await taskService.getTasksByOwner(req.user._id);

      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  // get task by user or owner
  getTasksById : async (req,res) =>{
    try{
      console.log('req.user:', req.user);
      const userId = req.user._id.toString();
      const task = await taskService.getTasksByOwner(userId);
      if (!task){
        return res.status(404).json({error: 'Task not found'})
      }
      res.json(task);
    }catch(err){
      res.status(400).json({ error: err.message });
    }
  },
  // Update task (only if owned by user)
  updateTask : async (req, res) => {
    try {
      const updated = await taskService.updateTaskByIdAndOwner(
        req.params.id,
        req.user.id,
        req.body
      );
      if (!updated) return res.status(404).json({ error: ' not found or unauthorized' });
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  // Delete task
  deleteTask : async (req, res) => {
    try {
      const deleted = await taskService.deleteTaskByIdAndOwner(
        req.params.id,
        req.user.id
      );
      if (!deleted) return res.status(404).json({ error: 'Task not found' });
      res.json({ message: 'Task deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = taskController;