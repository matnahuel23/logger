const { Router } = require ("express")
const { getUsers, createUser } = require ("../dao/controllers/users.controller") 

const router = Router()

router.get ("/", getUsers)

router.post ("/", createUser)

module.exports = { router }