import React from 'react';
//import {Link} from 'react-router-dom';
import "./signlog.css";
import axios from 'axios';


 function Reset_password(){

    function handleSubmit(){  
       // e.preventDefault();
      
       const password=document.getElementById("password");
       const confirmpassword=document.getElementById("confirmpassword");
       onEmpty(password);
       onEmpty(confirmpassword);

        axios.post("http://localhost:8080/user/resetPassword",{
            userPassword:document.getElementById("password").value,     
    })
    .then(resp=>{
        alert(resp.data.message);
         console.log("data Stored",resp.data)
         document.getElementById("password").value="";
         document.getElementById("confirmpassword").value="";
    })

    .catch(function(err){
        console.log(err);
    })

    }
    function onchange(p){
        document.getElementById(p.target.id).nextElementSibling.innerHTML=""
       }
    
       function onEmpty(p){
        if(p.value===""){
          p.nextElementSibling.innerHTML="This field is required";
        }
       }

         return(
             <div className="Reset">
                 <h2>Reset password </h2>
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
                 <button onClick={handleSubmit} type="submit">submit</button>
                 </div>
             </div>
         )
 }
  
 export default Reset_password