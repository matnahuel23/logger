const generateProductErrorInfo = (product) => {
    return `Uno o mas propiedades estan incompletas o no son válidas.
    Lista de las propiedades requeridas:
    * title : necesita ser un String, recibio ${product.title}
    * description : necesita ser un String, recibio ${product.description}
    * price : necesita ser un Number, recibio ${product.price}`
}

module.exports = { generateProductErrorInfo }