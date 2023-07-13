const mongoose = require('mongoose')

const MONGODB_URI = "mongodb://127.0.0.1:27017/inoter"
const connectToMongo = ()=> {
    mongoose.connect(MONGODB_URI)
}

module.exports = connectToMongo