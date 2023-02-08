const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    item: String,
    price: String,
})

const model = mongoose.model('products', schema)

module.exports = model