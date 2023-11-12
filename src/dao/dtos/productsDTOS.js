module.exports = class ProductDTO {
    constructor(product){
        this.title = product.title,
        this.description = product.description,
        this.price = product.price,
        this.id = product.id
    }
}