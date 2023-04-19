import React from 'react'
import {useState, useEffect} from 'react';
import Loader  from'../Images/loader.svg';
import axios from 'axios';


const Movies = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);


  useEffect( ()=> {

  const getData = async () => {
    try{
      const response = await axios.get(`https://swapi.dev/api/films`);
     // https://swapi.dev/api/films`);
      setData(response.data);
      setError(null);
    } catch(err){
      setError(err.message);
      setData(null);
    }finally{
      setLoading(false);
    }
  };

  getData();
}, [])
  
  
  return (
    <div className='box'>
        {loading && 
        <div className='img-load'>
          <img  src={Loader} alt='loader-img' />
          </div>}
        {error && <div className='error-msg'>
          {`Oops...............There is a problem fetching your data-${error}`}
          </div>}
        <ul className='movie-details'>
          {data && data.results.map((item) => {
            return (
              <li key={item.episode_id}>
                <h2>{item.title}</h2>
                <p className='date'>{new
                Date(item.release_date).toLocaleDateString('en-US',{month:'long',day:'numeric', year:'numeric'})}</p>
                {/* <p>{item.opening_crawl}</p>  */}
                <p>{item.opening_crawl.split('\n').slice(0, 10).join('\n')}...</p>

                <hr/>
                <a href='#more'>More Info</a>

              </li>
            )
          })}
        </ul>
    
    </div>
  )
}

export default Movies;