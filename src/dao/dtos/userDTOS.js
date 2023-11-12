module.exports = class userDTO {
    constructor(user){
        this.first_name = user.first_name,
        this.last_name = user.last_name,
        this.sex = user.sex
        this.email = user.email,
        this.job = user.job
        this.id = user.id
    }
}