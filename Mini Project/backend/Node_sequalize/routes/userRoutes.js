const {addNewUser, getUser,forgotGetPassword,forgotPassword,resetGetPassword,resetPassword}=require("../controllers/usercontroller")
const user = require("../models/user")

const userrouter = require('express').Router()

userrouter.post("/addUser",addNewUser)
userrouter.post("/getUser",getUser)

//userrouter.get("/forgotPassword",forgotGetPassword);
userrouter.post("/forgotPassword",forgotPassword);

//userrouter.get("/resetPassword/:token",resetGetPassword);
userrouter.post("/resetPassword",resetPassword);

module.exports=userrouter;