const express = require('express')
const router = express.Router()

const restaurantController = require('../controller/restaurantController')

router
    .route('/')
    .get(restaurantController.getAllRestaurants)
    .post(restaurantController.createRestaurant)

router
    .route('/:id')
    .get(restaurantController.getRestaurant)
    .patch(restaurantController.updateRestaurant)
    .delete(restaurantController.deleteRestaurant)

module.exports = router