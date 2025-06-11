 const mongoose = require('mongoose');
const User =require('../models/user.model');
 const taskSchema = new mongoose.Schema({
   title: {
     type: String,
     required: true,
     trim:true,
   },
   description: {
     type: String,
   },
   status:{
    type:String,
    enum:['To Do','In Progress','Done'],
    default:'To Do',
   },
   priority: {
    type: String,
    enum:['Low','Medium','High'],
    default: 'Medium',
   },
   dueDate: {
     type: Date
   },
   owner: {
     type: mongoose.Schema.Types.ObjectId,
     required: true,
     ref: 'User'
 },  
},{ timestamps: true });

 const Task = mongoose.model('Task', taskSchema);

 module.exports = Task;
