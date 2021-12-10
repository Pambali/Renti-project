import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import "./signlog.css"
 function Signup(){
      
    function handleSubmit(e){  
      e.preventDefault();
      const username=document.getElementById("username");
      const user_mail=document.getElementById("user_mail");
      const password=document.getElementById("password");
      const phone_no=document.getElementById("phone_no");
      const confirmpassword=document.getElementById("confirmpassword");

        Validation(user_mail);
        onEmpty(username);
         onEmpty(user_mail);
         onEmpty(password);
         onEmpty(phone_no);
         onEmpty(confirmpassword);
         //validation(user_mail);
         if(username.value && user_mail.value && phone_no.value && password.value===confirmpassword.value){
          console.log("function executed");
           axios.post("http://localhost:4000/user/addUser",{
            userName:document.getElementById("username").value,
             userEmail:document.getElementById("user_mail").value,
             userPassword:document.getElementById("password").value,
             userPhone:document.getElementById("phone_no").value 
            } )
        .then(resp=>{
         alert(resp.data.message);
          console.log("data Stored",resp.data)
          document.getElementById("username").value="";
          document.getElementById("user_mail").value="";
          document.getElementById("password").value="";
          document.getElementById("confirmpassword").value="";
          document.getElementById("phone_no").value="";
        })
        .catch(function(err){
            console.log(err);
            console.log("show error");
        })
      }
        if(username.value && user_mail.value && phone_no.value && password.value!==confirmpassword.value){
          confirmpassword.nextElementSibling.innerHTML="Password mismatch"
        }
      }

   function onchange(p){
    document.getElementById(p.target.id).nextElementSibling.innerHTML=""
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
   <div className="signup">
       <div>
          <h2>Sign up</h2>
       </div>
       <form>
       <div className="main">
       <div className="formElements">
          User Name 
          <input type="text" name="username" id="username" onChange={onchange} ></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div className="formElements"> 
          User Email 
          <input type="text" name="user_mail" id="user_mail" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={onchange}></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
        <div className="formElements">  
          Password 
          <input type="password" name="password" id="password" onChange={onchange}></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div className="formElements">
          Confirm password 
          <input type="password" name="confirmpassword" id="confirmpassword" onChange={onchange}></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div className="formElements">
          Phone No 
          <input type="tel" name="phone_no" id="phone_no" required pattern="[0-9]{5}[0-9]{5}" onChange={onchange}></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div>
          <button className="btn1" onClick={handleSubmit} type="submit">submit</button>
       </div>
       Already have an account?
      <Link id="link" to="/login">Login</Link>
       </div>
       </form>
   </div>
    )};
 
 export default Signup;