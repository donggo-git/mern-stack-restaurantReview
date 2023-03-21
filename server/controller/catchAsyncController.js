const catchAsync = (callbackFunction) => {
    return (req, res, next) => {
        callbackFunction(req, res, next).catch(next)
    }
}
module.exports = catchAsync