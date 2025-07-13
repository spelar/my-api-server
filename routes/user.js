const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 회원가입 라우트
router.post('/register', userController.register);

module.exports = router;
