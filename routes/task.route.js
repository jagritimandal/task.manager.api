const express = require('express');
const auth =require("../middleware/auth");
const upload =require('../middleware/file.upload')
const taskController = require('../controllers/task.controller');

const router = new express.Router();

router.post('/createTask',auth,upload.array('attachments'), taskController.createTask);
router.get('/getTasks',auth, taskController.getTasks);
router.get('/getTaskBy/:id',auth, taskController.getTasksById);
router.patch('/updateTask/:id', auth, taskController.updateTask);
router.delete('/deleteTask/:id', auth, taskController.deleteTask);


module.exports = router;
