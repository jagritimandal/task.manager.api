const express = require('express');
const auth = require('../middleware/auth');
const userController = require('../controllers/user.controller');

const router = new express.Router();

router.post('/registerUser',userController.registerUser);
router.post('/login',userController.loginUser);
router.get('/getAllUsers',auth, userController.getAllUsers);

module.exports = router;
