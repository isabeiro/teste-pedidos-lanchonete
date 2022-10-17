const ClientsModel = require('../models/clients')



async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const clients = await ClientsModel.find(obj)

    res.send(clients)
}

 async function post(req, res) {
    const {
        name,
        email,
        phone,
        adress,
    } = req.body

    console.log(req.body)

    const client = new ClientsModel({
        name,
        email,
        phone,
        adress,
    })

    client.save()

    res.send({
        message: 'success'
    })
}  

module.exports = {
    get,
    post,
}