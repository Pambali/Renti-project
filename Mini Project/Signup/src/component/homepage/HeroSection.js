import React from 'react';
//import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function HeroSection() {

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
      setIndex((prevIndex) => prevIndex === colors.length - 1 ? 0 : prevIndex + 1), delay);

    return () => {resetTimeout();};
  }, [index]);

  return (

      <div className='hero-container'>
        <h1>RENT AND ENJOY</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            GET STARTED
          </Button>
        </div>
      <div className="slideshow">
        <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {colors.map((backgroundColor, index) => (
            <div className="slide" key={index} style={{ backgroundColor }} ></div>
          ))}
        </div>

        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => { setIndex(idx);}}>
            </div>
          ))}
        </div>
      </div>
      <div className="movieContainer">
            <li className="li1">Latest & Trending</li><br></br>
            <li className="li1">Action Movies</li><br></br>
            <li className="li1">Kids Movies</li><br></br>
            <li className="li1">Thriller Movies</li><br></br>
            <li className="li1">Crime Movies</li><br></br>
            <li className="li1">Comedy Movies</li><br></br>
            <li className="li1"> Romantic Movies</li>
      </div>
    </div> 

  );
}

export default HeroSection;