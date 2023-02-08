const OrdersModel = require('../models/orders')

async function get(req, res) {
    const { id } = req.params
    const obj = id ? { _id: id } : null
    const orders = await OrdersModel.find(obj)

    res.send(orders)
}

async function post(req, res) {
  const {
    codigoCliente,
    codigoProduto,
    dataCriacao,
  } = req.body

  const orders = new OrdersModel({
    codigoCliente,
    codigoProduto,
    dataCriacao,
  })

  orders.save()

  res.send({
      message: 'post success'
  })
}  

module.exports = {
  get,
  post,
}