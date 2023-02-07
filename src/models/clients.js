const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    adress: String,
})

const model = mongoose.model('clients', schema)

module.exports = model