const express =require('express')
const router = express.Router();
const authController = require('../controllers/auth.controller')
const { body } = require("express-validator");


router.post("/register",[
    body('username'),
    body('email').isEmail().withMessage("Invalid Email"),
    body('password')

],authController.registerUser)


module.exports = router