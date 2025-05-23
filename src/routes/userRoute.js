const express = require('express');
const auth = require('../middleware/verifyToken');
const { signup, login, logout } = require('../Controllers/userController');

const router = new express.Router();

router.post('/users', signup);
router.post('/users/login', login);
router.post('/users/logout', auth, logout);

module.exports = router;
