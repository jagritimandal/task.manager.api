const express = require('express');
const auth = require('../middleware/verifyToken');
const { usersinfo,signup, login, logout } = require('../Controllers/userController');

const router = new express.Router();

router.get('/userinfo',usersinfo);
router.post('/users', signup);
router.post('/users/login', login);
router.post('/users/logout', auth, logout);

module.exports = router;
