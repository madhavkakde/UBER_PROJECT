const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('firstname must be at least 3 characters'),
    body('password').isLength({ min: 8 }).withMessage('Password must be atleast 8 characters')

],
    userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be atleast 8 characters')
],
    userController.loginUser
)


module.exports = router;