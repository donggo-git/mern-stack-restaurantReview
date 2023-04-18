const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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
        trim: true,
        select: false
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
    },
    role: {
        type: String,
        default: "client"
    }

})

userSchema.pre('save', async function (next) {
    //only run if password is modified
    if (!this.isModified('password')) return next()
    //hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12)
    //delete password confirm
    this.passwordConfirm = undefined;
    next()
})

//check when login if password user submit is the same with user password
userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword)
}

const User = mongoose.model('user', userSchema)
module.exports = User