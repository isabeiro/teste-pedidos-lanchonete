const router = require('express').Router()

const ClientController = require('../controllers/clients')
const ProductController = require('../controllers/products')

//clients
router.get('/clients:id?', ClientController.get)
router.post('/clients', ClientController.post)
router.put('/clients/:id', ClientController.put)

//products
router.get('/products:id?', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.remove)

module.exports = router