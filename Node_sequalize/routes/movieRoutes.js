const {addMovie,getMovieDetails,MovieList,MoviesByGenre, MovieImage}=require("../controllers/movieController")

const movierouter = require('express').Router()

movierouter.post("/addNewMovie",addMovie)
movierouter.get("/findByGenre/",MoviesByGenre)
movierouter.get("/findById/",getMovieDetails)
movierouter.get("/List",MovieList) 
movierouter.get("/trendingMovie",MovieImage)
module.exports=movierouter;