const express = require('express');
const verifyToken = require('../middleware/auth');
const userController = require('../controllers/user.Controller');

const router = new express.Router();

router.get('/userinfo',verifyToken,userController.usersinfo);
router.post('/users', userController.signup);
router.post('/users/login', userController.login);
router.post('/users/logout', verifyToken, userController.logout);

module.exports = router;
