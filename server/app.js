const express = require('express')
const app = express()
const restaurantRoute = require('./routes/restaurantRoute')

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get('/', (req, res) => {
    res.status(200).send("Hello from the server")
})

app.route('/api/v1/restaurants')

app.use(express.json())

app.use('/api/v1/restaurants', restaurantRoute)


module.exports = app