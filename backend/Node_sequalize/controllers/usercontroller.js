const {user}=require("../models");
const jwt = require("jsonwebtoken")

var addNewUser = async (req, res)=> {
    
     const {userEmail, userName, userPhone, userPassword} = req.body;
    try{
        const addusers = await user.create({userEmail, userName, userPhone, userPassword});
        console.log(addusers);
        return res.status(200).json({"message":"Sucessful"});

    }catch(e){
        return res.status(500).json({"message": e});
    }
}
  //Login
  var getUser = async(req,res) => {
    const { userEmail,userPassword} =req.body
   try{
    const users= await user.findOne({where:{userEmail:userEmail}});
    console.log(users);
    if(users){

        if(users.userPassword === userPassword){
            console.log("******************password matched *********************")
            
            return res.status(200).json({"message":"Sucessful Login","users":users});  
        }
        else{
            return res.status(201).json({"message":"Incorrect Password"});
        }
    }else{
        return res.status(202).json({"message":"User not found"});
    }
   }catch(e){
       console.log(e)
       return res.status(500).json({"message":e});
   }
 
  }
       
  const JWT_SECRET ='some super secret...'

 //getforgot-password
   var forgotGetPassword = async(req,res) =>{
       return res.send("Forgot-Password")
   }

    //post forgotpassword
   var forgotPassword = async(req,res) =>{
       const {userEmail}=req.body;
    
        const users= await user.findOne({where:{userEmail:userEmail}});
    
            if(!users.userEmail === userEmail){
                return res.status(202).json({"message":"user not found"});  
            }   
       
     //one time link creation
       const secret =JWT_SECRET + user.userPassword
       const payload ={
           userEmail: user.userEmail,
           userId: user.userId
       } 
       const token =jwt.sign(payload,secret,{expiresIn:'15m'})
       const link =`http://localhost:8080/user/resetPassword/${user.userId}/${token}`
       console.log(link)
       return res.json({"message":"Password  reset link has been send to ur mail...."})
    }
   //reset
   var resetGetPassword = async(req,res) =>{
           const {userId,token}= await req.params
          // return res.send(req.params);
          console.log(userId);
          console.log(user.userId)
          if(userId!==user.userId){
            return  res.status(201).json({"message":"Invalid id.."})
          }

          const secret =JWT_SECRET+user.userPassword
          try{
               const payload = jwt.verify(token,secret)
               const users = await user.findOne({where:{userEmail:user.userEmail}})
               return res.status(200).json(users)
          }
          catch(err){
              console.log(err.message);
              return res.status(500).json({"message":err})
          }
   }
   var resetPassword = async(req,res) =>{
    const {userId,token}= await req.params
    return res.send(user);
   }

module.exports={
    addNewUser,getUser,forgotGetPassword,forgotPassword,resetGetPassword,resetPassword
}
