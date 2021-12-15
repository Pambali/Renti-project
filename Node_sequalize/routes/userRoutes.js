const {addNewUser, getUser,forgotPassword,forgot,}=require("../controllers/usercontroller")
const user = require("../models/user")

const userrouter = require('express').Router()

userrouter.post("/addUser",addNewUser)
userrouter.post("/getUser",getUser)
userrouter.post("/forgotPassword",forgotPassword);
//userrouter.post("/delete",delete);
userrouter.post("/delete",forgot);
module.exports=userrouter;