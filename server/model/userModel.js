const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: [true, 'account must have a username'],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        require: [true, 'accout must have a email'],
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        require: [true, 'account must have a password'],
        trim: true
    },
    passwordConfirm: {
        type: String,
        require: [true, 'please confirm your password'],
        validate: {
            validator: function (el) {
                return el == this.password
            },
            message: "password confirm is not match"
        }
    }

})

const User = mongoose.model('user', userSchema)
module.exports = User