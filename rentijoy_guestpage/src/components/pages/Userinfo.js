import React from "react";
import { useNavigate } from "react-router-dom";
import "./signlog.css"
import image from './image/userpro.png';
import Navbar from "../Navbar";
function Userinfo(){
    //let headers= Headers();
 let navigate=useNavigate();
let userdetail = localStorage.getItem('user_mail')
   userdetail = JSON.parse(userdetail)
   console.log(userdetail)
  
   let log=localStorage.getItem('log')
   log==='true'?log=true:log=false;

   function onLogout(){
       
    localStorage.setItem('log',false)
       alert("Logout Succesfully");
           navigate("/")
    }

    // function Remove(){
    
    //     localStorage.setItem('user_mail',true)
    //     alert(" Succesfully remove your account");
    //     navigate("/sign-up")
    // }
    return(
        <><Navbar/>
        
        <div className="userinfo">
           
               <div className="userprofile">   
              <h2>User Profile</h2>
              <img className="image" src={image} alt=" "></img>
               </div>
             <div  className="userdetail">
                 
                  <p><label>UserId  : </label><span className="userchild1">{userdetail.users.userId}</span></p>
                  <p><label>UserName : </label><span className="userchild2">{userdetail.users.userName}</span></p>
                  <p><label>UserEmail : </label><span className="userchild3">{userdetail.users.userEmail}</span></p>
                  <p><label>Phone Number : </label><span className="userchild4">{userdetail.users.userPhone}</span></p><br/>
            
             <button className="btn1" onClick={onLogout}>LOGOUT</button>
            
             </div>
               
         </div>
         {/* <p onClick={Remove}>Remove your account completely?</p> */}
         </>
    )
}
 
 export default Userinfo;