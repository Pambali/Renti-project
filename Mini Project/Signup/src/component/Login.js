import React from 'react';
import axios from 'axios';
import image from '../image/image.jpeg';
import './signlog.css';
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom"
function Login(){
  let navigate=useNavigate();
  function handleSubmit(){   
     
    axios.post("http://localhost:8080/user/getUser",
    {
      userEmail:document.getElementById("user_mail").value,
      userPassword:document.getElementById("password").value
    })
    .then(resp=>  
      {alert(resp.data.message);
       console.log(resp.data.message);
       if(resp.data.message==="Sucessful Login"){
        localStorage.setItem('log',true)
         localStorage.setItem('user_mail',JSON.stringify(resp.data))
          document.getElementById("user_mail").value="";
          document.getElementById("password").value="";
          navigate("/home")
        }
      // else if(resp.data.message==="User not found"){
      //   console.log(resp.data.message);
      // }   
      // else{
      //   console.log(resp.data.message);
      // }
    })
        
    .catch(function (err){
      console.log("check Login error",err)
    })
  }
    return (
      <div className="Login">
                      <img src={image} alt=" "></img>
                      <div>
                      <h2>Login </h2>
                      Create account?
                      <Link id="link" to="/signup">Signup</Link>
                      </div>
                      <div>
                        User_mail :
                       <input type="email" name="user_mail" id="user_mail" ></input>
                       </div><br />
                       <div>
                        Password :
                       <input type="password" name="password" id="password"></input>
                       </div><br/>
                       <div className="forgot_password">
                       <Link id="link" to="/forgot_password">Forgot Password?</Link>
                       </div>
                       <div className="button">
                       <button className="btn1" onClick={handleSubmit} >Submit</button>
                       <button className="btn2" onClick={()=>{console.log("cancelld")}}>Cancel</button>
                       </div>
      </div>
    );
  }


export default Login;