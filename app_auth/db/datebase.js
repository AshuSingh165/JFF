const mongoose = require('mongoose')
// const user = require('./Modal/user_schema.js')


const connectdb=()=>{
    const url = "mongodb://127.0.0.1:27017/users"
    mongoose.connect(url)
    .then(()=> console.log("mongodb connected succesfully"))
    .catch((err)=>console.log(err))
} 

module.exports = connectdb