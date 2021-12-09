const { user } = require("../models");
//const jwt = require("jsonwebtoken");
const e = require("express");

//Signup
var addNewUser = async (req, res) => {

    const { userEmail, userName, userPhone, userPassword } = req.body;
    try {
        const addusers = await user.create({ userEmail, userName, userPhone, userPassword });
        console.log(addusers);
        return res.status(200).json({ "message": "Sucessful" });

    } catch (e) {
        return res.status(500).json({ "message": e });
    }
}

//Login
var getUser = async (req, res) => {
    const { userEmail, userPassword } = req.body
    try {
        const users = await user.findOne({ where: { userEmail: userEmail } });


        console.log(users);
        if (users) {

            if (users.userPassword === userPassword) {
                users.Logged = true;
                await users.save()
                console.log("******************password matched *********************")

                return res.status(200).json({ "message": "Sucessful Login", users });
            }
            else {
                return res.status(201).json({ "message": "Incorrect Password" });
            }
        } else {
            return res.status(202).json({ "message": "User not found" });
        }
    } catch (e) {
        console.log(e)
        return res.status(500).json({ "message": e });
    }

}

//Forgot password  
var forgotPassword = async (req, res) => {
    const { userPassword, userEmail } = req.body;

    const users = await user.findOne({ where: { userEmail: userEmail } }).catch(e => { console.log(e) });

    if (users) {
        if (users.userEmail === userEmail) {
            if (users.userPassword !== userPassword) {
                users.userPassword = userPassword;
                await users.save().then(() => {
                    return res.status(201).json({ "message": "Password changed successfully " })
                });
            }
            else {
                return res.status(201).json({ "message": "Please change the password, password is same " })
            }
        }
    }
    else (typeof (users) === undefined)
      return res.status(202).json({ "message": "user not found" });

}

module.exports = {
    addNewUser, getUser, forgotPassword
}
