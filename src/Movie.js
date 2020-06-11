import React from 'react';
import PropType from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {genres.map((genre, index) => {
                       return <li key={index} className="movie_genre">{genre}</li>;     
                    })}
                </ul>
                <p className="movie_summary">{summary.slice(0,180)}...</p>
            </div>
        </div>
    );
}

Movie.prototype = {
    year : PropType.string.isRequired,
    title  : PropType.string.isRequired,
    summary : PropType.string.isRequired,
    poster : PropType.string.isRequired,
    genres : PropType.arrayOf(PropType.string).isRequired
};

export default Movie;