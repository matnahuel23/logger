const { faker } = require ("@faker-js/faker")

const generateUser = () => {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        sex: faker.person.sex(),
        email: faker.internet.email(),
        job: faker.person.jobTitle(),
        id:null
    }
}

const generateProduct = () => {
    return {
        title: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price({ min: 1, max: 1000, dec: 0 }),
        id:null
    }
}

module.exports = { generateUser, generateProduct }