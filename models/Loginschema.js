const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")

const loginschema  = new mongoose.Schema({
  email:{
    type:String,
    required :true,
    unique : true
    
  },
  password:{
    type:String,
    required :true
   
  }
})

loginschema.methods.genrateToken = async function(){
  try {
    return jwt.sign({
      userId: this._id.toString(),
      Email:this.email
    },
    process.env.JWT_SECRET_KEY ,
    {
      expiresIn:"1d"
    }
  )
  } 
  catch (error) {
    console.log(error)
  }
}

const loginmodel = new mongoose.model('DEuser',loginschema);
module.exports = loginmodel