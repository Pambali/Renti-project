import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { movieBodyRenderFunction } from './Homelist'
import { fetchMovieList,fetchMovieDetail } from './Api/apis'
import MovieCast from './movie/cast'
import MovieBasic from './movie/basic'
import './Home.css'

/****************  Function to render details of cast inside the Single movie detail*****************/

/****************  Function to render Single Movie detail with buy rent option*****************/
export function SingleMovie(){
    let path=useParams();
    let movieID=path.movie;
    const[movie,setMovie]=useState([{}]);
    const [cast,setcast]=useState([])
    useEffect(()=>{
    fetchMovieDetail(movieID)
    .then(res=>{setMovie(res.data); setcast(res.data.movieCast)})
    .catch(e=>{console.log(e)})
    },[movieID])
    return(
        <div className="movie-detailed-page">
        {/* <div className="poster">
          <img alt="movie" src={movie.Poster}></img>
        </div>
        <div className="movie-info">
          <div className="movie-head">
            <h1>{movie.MovieName}</h1>
            <span className="year">{movie.Year}</span>
            <span className="duration">{movie.Duration}utes</span> 
            <div className="genre">{movie.Genre}</div>
          </div>
          <div className="movie-amt">
            <button className='buyRent'>Rent  {movie.RentAmt}</button>
            <button className='buyRent'>Buy  {movie.BuyAmt}</button>
          </div>
        </div> */}
        <MovieBasic movie={movie}/>
        <MovieCast movie={movie} cast={cast}/>
      </div>
        )
}
/****************  Function to render list of movies Grouped by genre*****************/
export default function MoviesByGenre() {
let path= useParams();
let genre=path.genre;
const[list,setList]=useState([])
useEffect(()=>{
    fetchMovieList(genre)
    .then(resp =>setList(resp.data))
    .catch(e=>console.log(e));
},[genre])
    return (
        <div>
            <h1 className="listtitle">{`${genre[0].toUpperCase()+genre.slice(1,genre.length)} Movies`}</h1>
            <div className="listBody">
            {
                list.map((obj)=>{return(movieBodyRenderFunction (obj))})
            }
            </div>
        </div>
    )
}
