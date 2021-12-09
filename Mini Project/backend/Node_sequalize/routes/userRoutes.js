const {addNewUser, getUser,forgotPassword}=require("../controllers/usercontroller")
const user = require("../models/user")

const userrouter = require('express').Router()

userrouter.post("/addUser",addNewUser)
userrouter.post("/getUser",getUser)
userrouter.post("/forgotPassword",forgotPassword);

module.exports=userrouter;