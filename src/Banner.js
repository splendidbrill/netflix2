import React, { useState, useEffect } from 'react';
import axios from './axios';
import request from './request';
import './Banner.css';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(request.fetchNetflixOriginals);
            setMovie(
                req.data.results
                [Math.floor(Math.random() * req.data.results.length -1)]
            );
            return req;
        }
        fetchData();
    }, [setMovie]);
 console.log(movie);
    return (
        <header className="banner" 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
            backgroundPosition: "centre centre",
            
        }}  >
            
            <div className="banner_contents">
                <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">MY LIST</button>
                </div>

                <h1 className="banner_description">{movie?.overview}</h1>
            
            </div>
            <div className="banner--fadeBottom" />
    
        </header>
    )
}


export default Banner;
