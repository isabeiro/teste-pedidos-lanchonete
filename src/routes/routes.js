const router = require('express').Router()

const ClientsController = require('../controllers/clients')
const ProductsController = require('../controllers/products')

//clients
router.get('/clients/:id?', ClientsController.get)
router.post('/clients', ClientsController.post)
router.put('/clients/:id', ClientsController.put)

//products
router.get('/products/:id?', ProductsController.get)
router.post('/products', ProductsController.post)
router.put('/products/:id', ProductsController.put)
router.delete('/products/:id', ProductsController.remove)

module.exports = router