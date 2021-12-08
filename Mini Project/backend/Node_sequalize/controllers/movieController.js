const {movie,movieCast} =require("../models");

var addMovie = async(req,res) =>
{
    var movieInfo={
        MovieName:req.body.Title,
        Poster:req.body.Poster,
        Rating:req.body.imdbRating,
        Year:req.body.Year,
        Released:req.body.Released,
        Duration:req.body.Runtime,
        Genre:req.body.Genre,
        RentAmt:req.body.RentAmt,
        BuyAmt:req.body.BuyAmt,
        Description:req.body.Plot,
        Actors:req.body.Actors,
        Writer:req.body.Writer,
        Director:req.body.Director,
        Producers:req.body.Producers,
        Language:req.body.Language
    }
   // const{MovieName,Poster,Rating,ReleasedYear,Duration,Genre,RentAmt,BuyAmt,Description,Actors,Producers,Director,Writer}=req.body;
    try{
        var addmoviedetails=await movie.create(movieInfo);
        var MovieId=addmoviedetails.MovieId;
        console.log(MovieId)
        var addmovieCastDetails=await movieCast.create({MovieId,Actors:movieInfo.Actors,Producers:movieInfo.Producers,Director:movieInfo.Director,Writer:movieInfo.Writer});
        return res.status(200).json(addmoviedetails);
    }catch(e){
        return res.status(500).json({"message": e});
    }
}

var getMovieDeatils = async(req,res) =>
{
    var query = require('url').parse(req.url,true).query;
    var movieId=query.id;
    console.log(movieId)
    try{
    var movieDetails=await movie.findOne({
        where: {Movieid:movieId},
        include: [{model: movieCast,as:"movieCast"}]
    })
    return res.status(200).json(movieDetails);
}catch(e){
    console.log(e)
    return res.status(500).json({"message": e});
}
}

var MovieLimitedList= async(req,res) =>{
    var query = require('url').parse(req.url,true).query;
    var movieGenre=query.genre;
    try{
        var moviesList=await movie.findAll({
            where:{Genre:movieGenre},
            limit: 2
        })
        return res.status(200).json(moviesList);
    }catch(e){
        console.log(e)
        return res.status(500).json({"message": e});
    }  
}

var MoviesByGenre= async(req,res) =>{
    var query = require('url').parse(req.url,true).query;
    var movieGenre=query.genre;
    try{
        var moviesList=await movie.findAll({
            where:{Genre:movieGenre},include: [{model: movieCast,as:"movieCast"}]
        })
        return res.status(200).json(moviesList);
    }catch(e){
        console.log(e)
        return res.status(500).json({"message": e});
    }  
}

module.exports={
    addMovie,getMovieDeatils,MovieLimitedList,MoviesByGenre
}