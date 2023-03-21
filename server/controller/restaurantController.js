const Restaurant = require('../model/restaurantModel')
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

exports.getRestaurant = catchAsync(async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id)

    if (!restaurant) {
        console.log('cannot find this restaurant')
        return
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

    res.status(200).json({
        status: 'success',
        data: { restaurant }
    })
})

exports.deleteRestaurant = catchAsync(async (req, res) => {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id)
    if (!restaurant) {
        console.log('restaurant not found');
    }
    const restaurants = await Restaurant.find()
    res.status(201).json({
        status: 'success',
        data: { restaurants }
    })
})