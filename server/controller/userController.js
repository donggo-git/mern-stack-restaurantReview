const User = require('../model/userModel')
const catchAsync = require('./catchAsyncController')
const jwt = require('jsonwebtoken')

exports.getAllUser = catchAsync(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        status: "success",
        data: {
            users
        }
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