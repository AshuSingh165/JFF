const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    Password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }

})
const user = mongoose.model("users",usersSchema)

module.exports = user