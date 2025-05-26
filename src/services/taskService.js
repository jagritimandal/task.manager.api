const Task = require('../models/task');

const TaskService = {
  createTask: async (taskData) => {
    const task = new Task(taskData);
    await task.save();
    return task;
  },

  getTasksByOwner: async (ownerId) => {
    return await Task.find({ owner: ownerId });
  },

  getTaskByIdAndOwner: async (taskId, ownerId) => {
    return await Task.findOne({ _id: taskId, owner: ownerId });
  },

  updateTaskByIdAndOwner: async (taskId, ownerId, updates) => {
    const task = await Task.findOne({ _id: taskId, owner: ownerId });
    if (!task) return null;

    Object.keys(updates).forEach((key) => {
      task[key] = updates[key];
    });

    await task.save();
    return task;
  },

  deleteTaskByIdAndOwner: async (taskId, ownerId) => {
    return await Task.findOneAndDelete({ _id: taskId, owner: ownerId });
  }
};

module.exports = TaskService;
