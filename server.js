const express = require("express")
const app = express()
const port = 3000;
const db = require('./db')
const cors = require('cors')


// removing cors error
app.use(cors());
// const corsOptions = {
//   origin: 'http://localhost:5173/login', // Allow only requests from this origin
//   methods: 'GET,POST', // Allow only these methods
//   allowedHeaders: ['Content-Type', 'Authorization'] // Allow only these headers
// };
// app.use(cors(corsOptions));

// using body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json()); 

// using routes and importing it
const loginroute = require('./routes/login')
app.use('/login',loginroute)

app.get('/',(req , res)=>{
 res.send("hello paheli baar khudse likha he pura");
})

app.listen(port,(req,res)=>{
   console.log("app is listing on port",port);
})