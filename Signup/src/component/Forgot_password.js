import React from 'react';
//import {Link} from 'react-router-dom';
import "./signlog.css";
import axios from 'axios';


 function Forgot_password(){

    function handleSubmit(){  
       // e.preventDefault();
      
        axios.post("http://localhost:8080/user/forgotPassword",{
            
             userEmail:document.getElementById("user_mail").value,
    })
    .then(resp=>{
        alert(resp.data.message);
         console.log("data Stored",resp.data)
         document.getElementById("user_mail").value="";
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