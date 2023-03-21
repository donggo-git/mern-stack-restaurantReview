const Restaurant = require('../model/restaurantModel')

exports.getAllRestaurants = async (req, res) => {
    console.log("hello, thanks for make request")
    const restaurants = await Restaurant.find()
    res.status(200).json({
        status: 'success',
        data: {
            restaurants
        }
    })

}

exports.createRestaurant = async (req, res) => {
    const newRestaurants = await Restaurant.create(req.body)
    res.status(200).json({
        status: 'success',
        data: {
            restaurants: newRestaurants
        }
    })
}

exports.getRestaurant = (req, res) => { }

exports.updateRestaurant = (req, res) => { }

exports.deleteRestaurant = (req, res) => { }