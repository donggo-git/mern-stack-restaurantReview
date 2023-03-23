const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')


//get all user, get a user, login, signup
//login
router.post('/login', userController.login)
//signup
router.post('/signup', userController.signup)
//forgot password
router.post('/forgotPassword', userController.forgotPassword)
router.post('/resetPassword', userController.resetPassword)

//update user info that's not password
router.patch('/updateMe', userController.updateMe)
router.patch('/updatePassword', userController.updatePassword)

//get all user
router.route('/')
    .get(userController.getAllUser)

module.exports = router