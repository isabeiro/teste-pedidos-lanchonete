const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    adress: String,
})

const Model = mongoose.model('clients', schema)

module.exports = Model