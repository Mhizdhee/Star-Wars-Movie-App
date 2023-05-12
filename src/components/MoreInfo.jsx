import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Images/loader.svg";
import axios from "axios";

const MoreInfo = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films/${id}`);
        const movie = response.data;
        
        const characters = await fetchResources(movie.characters);
        const planets = await fetchResources(movie.planets);
        const species = await fetchResources(movie.species);
        const starships = await fetchResources(movie.starships);
        const vehicles = await fetchResources(movie.vehicles); 

        movie.characters = characters;
        movie.planets = planets;
        movie.species = species;
        movie.starships = starships;
        movie.vehicles = vehicles;
        
        setData(movie);
        setError(null);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setData(null);
        setLoading(false);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const fetchResources = async (resourceUrls) => {
    try {
      const requests = resourceUrls.map((url) => axios.get(url));
      const responses = await Promise.all(requests);
      return responses.map((response) => response.data);
    } catch (err) {
      console.error(err);
      return [];
    }
  };



  return (
    <div className="container">
       
        {loading && (
        <div className="img-load">
          <img src={Loader} alt="loader-img" />
        </div>
      )}

       {error && (
        <div className="error-msg">
          {`Oops...............There is a problem fetching your data-${error}`}
        </div>
      )}
    <div className="card">
    
      <button className="btn" onClick={() => navigate(-1)}>
        Back to list
      </button>
   
        
       
   
       {data && (
        <ul className="movie-info">
          <li className="list" key={data.episode_id} >
            <h2>{data.title}</h2>
            <p>Director: {data.director}</p>
            <p>Producer: {data.producer}</p>
            <h4>Description</h4>
            <p className="para">{data.opening_crawl}</p>
            <hr />
            
            <h4>Characters</h4>
            <ul className="details">
            {data.characters.map((character) => (
                <li className="list" key={character.url}>
                  {character.name}
                  </li>
              ))} 
            </ul>
            <hr />
            <h4>Planets</h4>
            <ul className="details">
              {data.planets.map((planet) => (
                <li className="list" key={planet.url}>{planet.name}</li>
              ))}
            </ul>
            <hr/>
            <h4>Species</h4>
            <ul className="details">
               {data.species.map((specie)=>(
                  <li className="list" key={specie.url}>{specie.name}</li>
               ))}
            </ul>
            <hr />
            <h4>Starships</h4>
            <ul className="details">
               {data.starships.map((starship)=>(
                  <li className="list" key={starship.url}>{starship.name}</li>
               ))}
            </ul>
            <hr />
            <h4>Vehicles</h4>
            <ul className="details">
               {data.vehicles.map((vehicle)=>(
                  <li className="list" key={vehicle.url}>{vehicle.name}</li>
               ))}
            </ul>
            </li>
            </ul>
      )
              } 
              </div>
</div>

  )



            }








export default MoreInfo;
