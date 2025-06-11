const Task = require('../models/task.model');
const mongoose=require('mongoose');
const TaskService = {
  // create task
  createTask: async (taskData) => {
    const task = new Task(taskData);
    await task.save();
    return task;
  },
  //  get all task 
  getAllTasks : async () => {
    return Task.find();
  },
  // get task by user or owner
  getTasksByOwner: async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid user ID');
    }
    return await Task.find({ owner: id });
    //return await Task.find({ owner: new mongoose.Types.ObjectId(id) });
  },
  //update task by taskID and ownerID
  updateTaskByIdAndOwner: async (taskId, ownerId, updates) => {
    const task = await Task.findOne({ _id: taskId, owner: ownerId });
    if (!task) return null;

    Object.keys(updates).forEach((key) => {
      task[key] = updates[key];
    });

    await task.save();
    return task;
  },
  // delete task by taskID and OwnerID
  deleteTaskByIdAndOwner: async (taskId, ownerId) => {
    return await Task.findOneAndDelete({ _id: taskId, owner: ownerId });
  }
};

module.exports = TaskService;
