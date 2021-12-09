import React from 'react';
//import {Link} from 'react-router-dom';
import "./signlog.css";
import axios from 'axios';
import { useNavigate } from 'react-router';

 function Forgot_password(){
     let navigate=useNavigate();
    function handleSubmit(){  
       // e.preventDefault();
       const user_mail=document.getElementById("user_mail");
       const password=document.getElementById("password");
       const confirmpassword=document.getElementById("confirmpassword");
       Validation(user_mail);
       onEmpty(user_mail)
       onEmpty(password);
       onEmpty(confirmpassword);
    if((password.value!=="" ||confirmpassword.value!=="")&&(password.value===confirmpassword.value))
        {axios.post("http://localhost:8080/user/forgotPassword",{
            userEmail:document.getElementById("user_mail").value,
            userPassword:document.getElementById("password").value
        })
        .then(resp=>{
            alert(resp.data.message);
            if(resp.data.message==="Password changed successfully "){
            console.log("data Stored",resp.data)
            document.getElementById("user_mail").value="";
            navigate('/login');
            }
        })
        .catch(function(err){
            console.log(err);
        })
    }
    }
    function onEmpty(p){
        if(p.value===""){
          p.nextElementSibling.innerHTML="This field is required";
        }
       }

       function Validation(p){
        if( (p.value==="")||((!p.value.includes("@")) || (!p.value.includes(".com")))) {
           p.nextElementSibling.innerHTML="Invalid mail";  
        }
     }

         return(
             <div className="forgot">
                 <h2>Forgot password</h2>
                 <div className="formElements">
                  User Email 
                 <input type="text" name="user_mail" id="user_mail" onChange={onchange}></input>
                 <span style={{color:"#f00"}} ></span>
                 </div><br/>
                 <div className="formElements">  
                  Enter New Password 
                 <input type="password" name="password" id="password" onChange={onchange}></input>
                 <span style={{color:"#f00"}} ></span>
                 </div><br />
                 <div className="formElements">
                  Confirm password 
                  <input type="password" name="confirmpassword" id="confirmpassword" onChange={onchange}></input>
                  <span style={{color:"#f00"}} ></span>
                  </div><br/>
                 <div> 
                 <button className="btn1" onClick={handleSubmit} type="submit">submit</button>
                 </div>
             </div>
         )
 }
  
 export default Forgot_password