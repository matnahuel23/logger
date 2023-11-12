const generateUserErrorInfo = (user) => {
    return `Uno o mas propiedades estan incompletas o no son válidas.
    Lista de las propiedades requeridas:
    * first_name : necesita ser un String, recibio ${user.first_name}
    * last_name : necesita ser un String, recibio ${user.last_name}
    * sex : necesita ser un String, recibio ${user.sex}
    * email : necesita ser un String, recibio ${user.email}
    * job : necesita ser un String, recibio ${user.job}`
}

function validateUIParam(req, res, next) {
    if(!/^\d+$/.test(uid)) {
        const error = new Error('UID no válido')
        error.type = ErrorType.INVALID_PARAM
        next(error)
    }else{
        next()
    }
}

module.exports = { generateUserErrorInfo, validateUIParam }