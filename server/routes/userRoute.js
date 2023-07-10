const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const authController = require('../controller/authController')


//get all user, get a user, login, signup
//login
router.post('/login', authController.login)
//signup
router.post('/signup', authController.signup)
//forgot password
router.post('/forgotPassword', userController.forgotPassword)
router.post('/resetPassword', userController.resetPassword)

//update user info that's not password
router.patch('/updateMe', userController.updateMe)
router.patch('/updatePassword/:token', userController.updatePassword)

//get all user
router.route('/')
    .get(userController.getAllUser)

module.exports = router