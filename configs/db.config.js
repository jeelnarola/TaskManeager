const mongoose = require('mongoose')
require('dotenv').config()
const Databse = async() =>{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('DataBase Connect....')
}

module.exports = Databse