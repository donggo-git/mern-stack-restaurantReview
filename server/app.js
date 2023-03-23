const express = require('express')
const app = express()
const restaurantRoute = require('./routes/restaurantRoute')
const userRoute = require('./routes/userRoute')
const morgan = require('morgan')

if (process.env.NODE_ENV == "development") {
    app.use(morgan('dev'))
}

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

app.use(express.json())
//Route
app.use('/api/v1/restaurants', restaurantRoute)
app.use('/api/v1/user', userRoute)
//path not found
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server`
    })
})


module.exports = app