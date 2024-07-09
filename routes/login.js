const express = require("express");
const router = express.Router();
const loginmodel = require("../models/Loginschema");
const bcrypt = require('bcryptjs')


router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newlogin = new loginmodel({...data, password: hashedPassword});
   
    
    const response = await newlogin.save();
    console.log("data is saved");
    res.status(200).json( { response ,
      token : await response.genrateToken(),
      userId:response._id.toString()
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async(req, res) => {
  try {
    const response = await loginmodel.find();
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

// 



module.exports = router