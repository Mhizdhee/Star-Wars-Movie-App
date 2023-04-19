import Header from './Header';
import Movies from './Movies'
import '../styles/movieApp.css';



function MovieApp() {
  return (
   <div className='movieApp'>
    
    <Header/>
    <Movies/>
   </div>
  );
}

export default MovieApp;
