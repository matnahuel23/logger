const { Router } = require ("express")
const { Logger } = require ('../utils/logger.js')

const router = Router()

router.get ("/", Logger)

module.exports = { router }