import Slider from 'react-slick';
import './App.css';
import MovieCard from './components/MovieCard';
import { useEffect, useState } from 'react';
import MovieHeader from './components/MovieHeader';
function App() {
  const [dataOfMovie, setData] = useState([])
  function movieKey(typeOfMovie) {
    fetch(`http://www.omdbapi.com/?apikey=5efd9b0d&s=${typeOfMovie}`).then((movieData) => movieData.json()).then((data) => setData(data.Search))
  }
  useEffect(() => {
    movieKey("fantasy")
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  console.log(dataOfMovie)
  return (
    <div>
      <MovieHeader movieKey={movieKey}/>
      <div className='hello'>
      <Slider {...settings} className="anything">
       {dataOfMovie.map((item) => <MovieCard title={item.Title} year={item.Year} poster={item.Poster} />)}
       </Slider>
       </div>
      </div>
 
  );
}

export default App;
