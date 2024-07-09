const mongoose = require('mongoose')
const loginmodel = require('./models/Loginschema')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGOURL)

const db = mongoose.connection


db.on('connected' , ()=>{
console.log("connected to db")
})
db.on('error' , (error)=>{
console.log("connected to db" , error)
})
db.on('disconnected' , ()=>{
console.log("disconnected to db")
})

module.exports = db