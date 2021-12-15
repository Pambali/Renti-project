import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import "./signlog.css";
import Navbar from '../Navbar';
 function Signup(){
      
    function handleSubmit(e){  
      e.preventDefault();
      const username=document.getElementById("username");
      const user_mail=document.getElementById("user_mail");
      const password=document.getElementById("password");
      // const phone_no=document.getElementById("phone_no");
      const confirmpassword=document.getElementById("confirmpassword");
         onEmpty(username);
         onEmpty(user_mail);
         onEmpty(password);
         // onEmpty(phone_no);
         onEmpty(confirmpassword);
         
         if((user_mail.value.includes("@") && user_mail.value.includes(".com")) && password.value===confirmpassword.value){
           
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
        if( password.value!==confirmpassword.value){
          confirmpassword.nextElementSibling.innerHTML="Password mismatch"
        }
        if(!user_mail.value.includes("@") && !user_mail.value.includes(".com")){
         user_mail.nextElementSibling.innerHTML="Invalid"
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

   // function validation(p){
   //    if( ((p.value.trim().length < 8) && (p.value.trim().length > 16)) && (!p.value.includes('@')) && (!p.value.includes('#')) )
   //      {
   //          p.nextElementSibling.innerHTML = "Invalid password"
           
   //      }
   // }


    return(
       
   <div className="signup">
      
      <Navbar/>
       <div>
          <h2>Sign up</h2>
       </div>
       <form>
       <div className="main">
       <div className="formElements">
          User Name 
          <input type="text" name="username" id="username"   onChange={onchange}></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div className="formElements"> 
          User Email 
          <input type="email" name="user_mail" id="user_mail"  onChange={onchange}></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
        <div className="formElements">  
          Password 
          <input type="password" name="password" id="password"  onChange={onchange}></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div className="formElements">
          Confirm password 
          <input type="password" name="confirmpassword" id="confirmpassword" onChange={onchange}></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div className="formElements">
          Phone No 
          <input type="number" id="phone_no" name= "phone_no"   />
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div className="formElements">
          <button className="btn1" onClick={handleSubmit} type="submit">submit</button>
      <div> Already have an account?<Link id="link" to="/login">Login</Link></div>
      </div>
       </div>
       </form>
   </div>
    )};
 
 export default Signup;