const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')

const restaurantController = require('../controller/restaurantController')

router
    .route('/')
    .get(restaurantController.getAllRestaurants)
    .post(authController.protect, restaurantController.createRestaurant)

router
    .route('/:id')
    .get(restaurantController.getRestaurant)
    .patch(authController.protect, restaurantController.updateRestaurant)
    .delete(authController.protect, restaurantController.deleteRestaurant)

module.exports = router