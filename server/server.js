const mongoose = require('mongoose')
const app = require('./app')
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB).then(con => {
    console.log('DB connection successful')
}).catch(err => {
    console.log(err)
})

app.listen(5000, () => {
    console.log(`App running`)
})