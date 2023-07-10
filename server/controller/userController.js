const User = require('../model/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('./catchAsyncController')
const jwt = require('jsonwebtoken')
const sendEmail = require('../utils/email')

exports.getAllUser = catchAsync(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        status: "success",
        data: {
            users
        }
    })
})

exports.forgotPassword = catchAsync(async (req, res, next) => {
    // 1) Get user based on POSTed email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new AppError('There is no user with email address.', 404));
    }

    // 2) Generate the random reset token
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    // 3) Send it to user's email
    const resetURL = `${req.protocol}://${req.get(
        'host'
    )}/api/v1/users/resetPassword/${resetToken}`;

    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'Your password reset token (valid for 10 min)',
            message
        });

        res.status(200).json({
            status: 'success',
            message: 'Token sent to email!'
        });
    } catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false });

        return next(
            new AppError('There was an error sending the email. Try again later!'),
            500
        );
    }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
    //check if token is correct
    const user = await User.findOne({ passwordResetToken: req.params.id })
    if (!user) {
        return next(new AppError("There is no user with this resetPasswordToken", 500))
    }
    //reset the password

})

exports.updateMe = (req, res, next) => {

}

exports.updatePassword = (req, res, next) => {

}