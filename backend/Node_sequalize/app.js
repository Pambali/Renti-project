const express=require('express')
const {sequelize}=require('./models');
const jwt = require('jsonwebtoken');
const movierouter=require("./routes/movieRoutes")
const userrouter=require("./routes/userRoutes")
const payrouter=require("./routes/paymentRoutes")
const mymovierouter=require("./routes/usermovieRoutes")
const cors=require('cors');
const { where } = require('sequelize/dist');

const app=express();

app.use(cors({
    origin:"*"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.get("/",(req,res)=>
{
    return res.json({"message":"Success"})
})

const PORT=8080;
app.listen({port:PORT},async()=>{
    console.log(`server started at ${PORT}`)
    try{
       await sequelize.authenticate();
       console.log("connected");
    }catch(e)
    {
        console.log(e)
    }
})
app.use('/usermovie',payrouter)
app.use('/user',userrouter);
app.use('/movie',movierouter);
app.use('/user/movies',mymovierouter)

/* sequelize model:generate --name User --attributes firstname:string, lastname:string*/ 