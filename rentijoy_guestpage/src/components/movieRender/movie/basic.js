
import "../assests/basic.css"
import React,{useState} from "react";
import axios from "axios";
import Navbar from "../../Navbar";
export default function MovieBasic(props){

  const [payment, setPayment] = useState(false);
  // const [paymentId, setPaymentId] = useState("");
  // const [orderId, setOrderId] = useState("");
  // const [signature, setSignature] = useState("");

  
  const buyNow = async (productId,type) => {
    if(localStorage.getItem('log')!=='true')alert('Please Login')
    else{
    // const res = await axios.get(`http://localhost:8000/order/${productId}`);
     const res = await axios.get(`http://localhost:4000/movie/order/?id=${productId}&type=${type}`)
     console.log(res.data); 
     if(res.status !== 200){
       return 
     }
     const options = {
       "key": "rzp_test_11uZlqQcw3DCmb",
       "amount": res.data.amount,
       "currency": res.data.currency,
       "name": res.data.notes,
       "description": res.data.notes.Movie_name,
       "image": "",
       "order_id": res.data.id,
       "handler": function (response){
          //  setPaymentId(response.razorpay_payment_id);
          //  setOrderId(response.razorpay_order_id);
          //  setSignature(response.razorpay_signature);
           setPayment(true);
       },
       "prefill": {
           "name": "",
           "email": "",
           "contact": ""
       }
   };
   var rzp1 = new window.Razorpay(options);
 
   rzp1.open();
 
   rzp1.on('payment.failed', function (response){
           alert(response.error.code);
          
   });
   }}


    return(<><Navbar/>
    <div className="movie-basic-conatainer">
        <div className="movie-basic">
        <div className="poster">
          <img alt="movie" src={props.movie.Poster}></img>
        </div>
        <div className="movie-info">
          <div className="movie-head">
            <h1>{props.movie.MovieName}</h1>
            <span className="year">{props.movie.Year}</span>
            <span className="duration">{props.movie.Duration}utes</span> 
            <div className="genre">{props.movie.Genre}</div>
          </div>
            <div className="movie-amt">
              { !payment && (<><span><button onClick={() => buyNow(props.movie.MovieId,"Rent")}>Rent  &#8377;{props.movie.RentAmt}</button></span>
             <span><button onClick={() => buyNow(props.movie.MovieId,"Buy")}>Buy  &#8377;{props.movie.BuyAmt}</button></span></>)}
            {
              payment && ( <h1><i className="fas fa-play"/> Play</h1>)
            }
          </div>
        </div> 
       
      </div>
      </div>
      </>)
}