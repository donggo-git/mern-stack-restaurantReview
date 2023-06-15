const catchAsync = require('./catchAsyncController')
const User = require('../model/userModel')
const jwt = require('jsonwebtoken')

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.signup = catchAsync(async (req, res, next) => {

    const newUser = await User.create(req.body)
    //generate a json web token for new user
    const token = signToken(newUser._id)

    res.status(201).json({
        status: "success",
        token,
        data: {
            user: newUser
        }
    })
})

exports.login = catchAsync(async (req, res) => {
    const { email, password } = req.body;

    //check if email and password exist
    if (!email || !password) {
        console.log('Please provide password or email')
        return;
    }
    //check if user exist and password correct
    const user = await User.findOne({ email }).select('+password');

    //if cannot find user or wrong password return
    if (!user || !(await user.correctPassword(password, user.password))) {
        console.log('Incorrect email or password')
        return;
    }

    //if everything ok, send token to client
    const token = signToken(user._id)
    res.status(200).json({
        status: "success",
        token
    })
})

exports.protect = catchAsync(async (req, res, next) => {
    let token;
    //1) Getting token and check if it's there
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
        return console.log('You not logged in') //next(new AppError('You not logged in'));
    }
    //2) Verification token
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)

    //3) check if user still exist
    //4) check if user change password after jwt was issues
    next()
})