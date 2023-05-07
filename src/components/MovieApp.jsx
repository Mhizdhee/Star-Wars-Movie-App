import Header from './Header';
import Movies from './Movies'
// import {Route} from 'react-router-dom';
import '../styles/movieApp.css';



function MovieApp() {
  return (
   <div className='movieApp'>
    
    <Header/>
    <Movies/>
    {/* <Route path='link' element={<Link/>}/> */}
   </div>
  );
}

export default MovieApp;
