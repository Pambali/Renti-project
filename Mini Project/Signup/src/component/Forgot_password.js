import React from 'react';
//import {Link} from 'react-router-dom';
import "./signlog.css";
import axios from 'axios';
import { useNavigate } from 'react-router';

 function Forgot_password(){
let navigate=useNavigate();
    function handleSubmit(){  
       // e.preventDefault();
      
    axios.post("http://localhost:8080/user/forgotPassword",{
        userEmail:document.getElementById("user_mail").value,
    })
    .then(resp=>{
        alert(resp.data.message);
        if(resp.data.message==="user found"){
         console.log("data Stored",resp.data)
         document.getElementById("user_mail").value="";
        navigate('/reset_password');
        }
    })
    .catch(function(err){
        console.log(err);
    })

    }

         return(
             <div className="forgot">
                 <h2>Forgot password</h2>
                 User Email 
                 <input type="text" name="user_mail" id="user_mail" onChange={onchange}></input>
                 <div>
                 <button onClick={handleSubmit} type="submit">submit</button>
                 </div>
             </div>
         )
 }
  
 export default Forgot_password