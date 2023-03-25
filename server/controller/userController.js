const User = require('../model/userModel')
const catchAsync = require('./catchAsyncController')

exports.getAllUser = catchAsync(async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        status: "success",
        data: {
            users
        }
    })
})

exports.signup = catchAsync(async (req, res) => {
    console.log(req.body)
    const newUser = await User.create({
        userName: req.body.use,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
        //req.body
    })
    res.status(201).json({
        status: "success",
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
    if (!user || !(await (user.password == password))) {
        console.log('Incorrect password or email')
        res.status(404).json({
            status: 'fail',
            message: 'Incorrect password or email'
        })
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