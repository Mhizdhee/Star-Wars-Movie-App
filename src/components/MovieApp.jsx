import Header from './Header';
import Movies from './Movies'
import '../styles/movieApp.css';
import {Routes, Route} from 'react-router-dom';
import MoreInfo from './MoreInfo';




function MovieApp() {
  return (
   <div className='movieApp'> 
    <Header/>
   
    <Routes>
        <Route path="/" element={<Movies/>}/>
        <Route path="/moreinfo/:id" element={<MoreInfo />} />
      </Routes>
   
   </div>
  );
}

export default MovieApp;
