const Restaurant = require('../model/restaurantModel')
const AppError = require('../utils/appError')
const catchAsync = require('./catchAsyncController')

exports.getAllRestaurants = catchAsync(async (req, res) => {

    const restaurants = await Restaurant.find()
    res.status(200).json({
        status: 'success',
        data: {
            restaurants
        }
    })
})

exports.createRestaurant = catchAsync(async (req, res) => {
    const newRestaurants = await Restaurant.create(req.body)
    res.status(200).json({
        status: 'success',
        data: {
            restaurants: newRestaurants
        }
    })
})

exports.getRestaurant = catchAsync(async (req, res, next) => {
    const restaurant = await Restaurant.findById(req.params.id)

    if (!restaurant) {
        return next(new AppError(`cannot find restaurant with id ${req.params.id}`, 404))
    }
    res.status(200).json({
        status: 'success',
        data: {
            restaurant
        }
    })

})

exports.updateRestaurant = catchAsync(async (req, res) => {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    if (!restaurant) {
        return next(new AppError(`cannot find restaurant with id ${req.params.id}`, 404))
    }

    res.status(200).json({
        status: 'success',
        data: { restaurant }
    })
})

exports.deleteRestaurant = catchAsync(async (req, res) => {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id)

    if (!restaurant) {
        return next(new AppError(`cannot find restaurant with id ${req.params.id}`, 404))
    }

    const restaurants = await Restaurant.find()
    res.status(201).json({
        status: 'success',
        data: { restaurants }
    })
})