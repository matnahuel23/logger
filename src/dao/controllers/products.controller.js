const { generateProduct } = require ("../../utils/faker.js")
const ProductDTO = require ("../dtos/productsDTOS.js")
const CustomError = require ("../../errors/CustomError.js")
const { EErrors }= require ("../../errors/enums.js")
const { generateProductErrorInfo } = require ("../../errors/Info/infoProduct.js")

const products = []

getProducts = async (req, res) => {
    for (let i = 0; i < 50; i++) {
        const newProduct = generateProduct()
        newProduct.id = i+1
        products.push(newProduct)
    }
    res.send({ status: "success", payload: products })
}

createProduct = async (req, res) => {
    const { title, description, price} = req.body;
    if (!title || !description || !price) {
        CustomError.createError({
            name:"Error en la creación de producto",
            cause:generateProductErrorInfo({title,description,price}),
            message:"Error intentando crear el producto",
            code:EErrors.INVALID_TYPES_ERROR
        })
    }
    const product = new ProductDTO({
        title, 
        description, 
        price
    })
    if (products.length===0){
        product.id = 1
    } else {
        product.id = products[products.length-1].id+1
    }
    products.push(product)
    res.send({ result: "success", payload: products });
}

module.exports = { getProducts, createProduct }