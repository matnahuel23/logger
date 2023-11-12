const express = require ('express')
const usersRouter = require ('./routes/users.router.js')
const productsRouter = require ('./routes/products.router.js')
const errorHandler = require ('./utils/errors.js')
const { Logger } = require ('./utils/logger.js')

const app = express()
const PORT = 8080

app.use(express.json())
app.use("/mockingusers", usersRouter.router)
app.use("/mockingproducts", productsRouter.router)
app.use(errorHandler)
app.use (Logger)

app.get('/', (req, res) => {
    res.send({message: "Prueba de Logger!"})
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})