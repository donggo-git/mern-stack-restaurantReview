const mongoose = require('mongoose')


const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "a restaurant must have a name"],
        trim: true,
        unique: true,
        maxLength: [40, "a restaurant’s name has to be less than or equal to 40 characters"],
        minLength: [5, "a restaurant’s name has to be greater than or equal to 5 characters"]
    },
    address: {
        type: String,
        require: [true, "a restaurant must have an address"],
        trim: true
    },
    phoneNumber: {
        type: Number,
        require: [true, "a restaurant must have a phone number"],
    },
    imageCover: {
        type: String,
        require: [true, "A restaurant must have a main image"],
        trim: true
    },
    website: {
        type: String,
        trim: true
    },
    openHours: {
        type: Map,
        of: String,
        default: {
            Sunday: "8AM – 8PM",
            Monday: "8AM – 8PM",
            Tuesday: "8AM – 8PM",
            Wednesday: "8AM – 8PM",
            Thursday: "8AM – 8PM",
            Friday: "8AM – 8PM",
            Saturday: "8AM – 8PM",
        }
    },
    rating: {
        type: Number,
        default: 0
    },
    ratingQuantity: {
        type: Number,
        default: 0
    },
    images: [String],
    comments: [{
        username: { type: String, require: true, trim: true },
        comment: { type: String, require: true },
        rate: { type: Number, require: true }
    }]
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant