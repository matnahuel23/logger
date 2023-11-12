const { Router } = require ("express")
const { getProducts, createProduct } = require ("../dao/controllers/products.controller.js") 

const router = Router()

router.get ("/", getProducts)

router.post ("/", createProduct)

module.exports = { router }