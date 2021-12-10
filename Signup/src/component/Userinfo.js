import React from "react";
import { useNavigate } from "react-router-dom";
import "./signlog.css"
import image from '../image/userpro.png';

function Userinfo(){
 let navigate=useNavigate();
let userdetail = localStorage.getItem('user_mail')
   userdetail = JSON.parse(userdetail)
   console.log(userdetail)

   function onLogout(){
    localStorage.setItem('log',false)
       alert("Logout Succesfully");
       navigate("/home")

   }

    return(
        <div className="userinfo">
               <div className="userprofile">   
              <h2>User Profile</h2>
              <img className="image" src={image} alt=" "></img>
               </div>
             <div  className="userdetail">
                 
                  <p><label>UserId: </label><span className="userchild">{userdetail.users.userId}</span></p>
                  <p><label>UserName: </label><span className="userchild">{userdetail.users.userName}</span></p>
                  <p><label>UserEmail: </label><span className="userchild">{userdetail.users.userEmail}</span></p>
                  <p><label>Phone Number: </label><span className="userchild">{userdetail.users.userPhone}</span></p>
            
             <button className="btn1" onClick={onLogout}>LOGOUT</button>
             </div>
         </div>
            
    
    )
}
 
 export default Userinfo;
