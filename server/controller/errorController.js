const AppError = require('../utils/appError')

const handleCastErrorDB = error => {
    const message = `Invalid ${error.path}: ${error.value}`
    return new AppError(message, 400)
}

const handleDuplicateFieldDB = error => {
    const message = `Duplicate field value: ${error.keyValue.name}. Please use another value`
    return new AppError(message, 400)
}

const handleValidationErrorDB = error => {
    const message = `Invalid input data`
    return new AppError(message, 400)
}

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error'

    let error = { ...err }

    //error for invalid id
    if (error.kind === "ObjectId") {
        error = handleCastErrorDB(error)
    }
    //error for duplicate field
    if (error.code == 11000) {
        error = handleDuplicateFieldDB(error)
    }
    if (error._message == "Validation failed") {
        error = handleValidationErrorDB(error)
    }
    if (error.name == "ValidationError") {
        error = handleValidationErrorDB
    }

    //console.log(error.message)

    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
        stack: error.stack,
        error: error
    })
}
