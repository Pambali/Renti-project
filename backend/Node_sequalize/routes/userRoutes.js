const {addNewUser, getUser,forgotGetPassword,forgotPassword,resetGetPassword,resetPassword}=require("../controllers/usercontroller")
const user = require("../models/user")

const userrouter = require('express').Router()

userrouter.post("/addUser",addNewUser)
userrouter.post("/getUser",getUser)

userrouter.get("/forgotPassword",forgotGetPassword);
userrouter.post("/forgotPassword",forgotPassword);

userrouter.get("/resetPassword/:userId/:token",resetGetPassword);
userrouter.post("/resetPassword/:userId/:token",resetPassword);

module.exports=userrouter;