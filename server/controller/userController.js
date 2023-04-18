const User = require('../model/userModel')
const catchAsync = require('./catchAsyncController')
const jwt = require('jsonwebtoken')

exports.getAllUser = catchAsync(async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        status: "success",
        data: {
            users
        }
    })
})

exports.signup = catchAsync(async (req, res, next) => {

    const newUser = await User.create(req.body)
    //generate a json web token for new user
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })

    res.status(201).json({
        status: "success",
        token,
        data: {
            user: newUser
        }
    })
})

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    //check if password and email exist
    if (!email || !password) {
        console.log('Please provide email and password');
        return;
    }
    //check if user exist && password correct
    const user = await User.findOne({ email }).select('+password')
    if (!user || !(await user.correctPassword(password, user.password))) {
        console.log('Incorrect email or password')
        return;
    }

    res.status(200).json({
        status: 'success',
        message: 'login success'
    })
})

exports.forgotPassword = (req, res, next) => {

}

exports.resetPassword = (req, res, next) => {

}

exports.updateMe = (req, res, next) => {

}

exports.updatePassword = (req, res, next) => {

}