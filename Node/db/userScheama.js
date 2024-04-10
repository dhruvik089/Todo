const connectDB=require('./config')
const mongoose = require('mongoose')

connectDB()

const userSchema = new mongoose.Schema({
    value: String
})

const User = mongoose.model("user", userSchema)

module.exports = User