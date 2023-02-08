const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    codigoCliente: String,
    codigoProduto: String,
    dataCriacao: String,
})

const model = mongoose.model('orders', schema)

module.exports = model