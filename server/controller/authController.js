const catchAsync = require('./catchAsyncController')
const User = require('../model/userModel')

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
    const token = ""
    res.status(200).json({
        status: "success",
        token
    })
})