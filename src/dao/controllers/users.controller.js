const { generateUser } = require ("../../utils/faker.js")
const UserDTO = require ("../dtos/userDTOS.js")
const CustomError = require ("../../errors/CustomError.js")
const { EErrors }= require ("../../errors/enums.js")
const { generateUserErrorInfo } = require ("../../errors/Info/infoUser.js")

const users = []

getUsers = async (req, res) => {
    for (let i = 0; i < 50; i++) {
        const newUser = generateUser()
        newUser.id = i+1
        users.push(newUser)
    }
    res.send({ status: "success", payload: users })
}

createUser = async (req, res) => { 
    const { first_name, last_name, sex, email, job } = req.body;
    if (!first_name || !last_name || !sex || !email || !job) {
        CustomError.createError({
            name:"Error en la creación de usuario",
            cause:generateUserErrorInfo({first_name, last_name, sex, email, job}),
            message:"Error intentando crear el usuario",
            code:EErrors.INVALID_TYPES_ERROR
        })
    }
    const user = new UserDTO ({
        first_name,
        last_name,
        sex,
        email,
        job
    })
    if (users.length===0){
        user.id = 1
    } else {
        user.id = users[users.length-1].id+1
    }
    users.push(user)
    res.send({ result: "success", payload: users })
}

module.exports = { getUsers, createUser }