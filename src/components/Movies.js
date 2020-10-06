import React from 'react';
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >= 8){
        return "green";
    } else if (vote >= 6){
        return "orange";
    } else {
        return "return";
    }
};


const Movie = (props) =>{
    return(
        <div className="movie">
            <img src = 
                {props.data.poster_path ? IMG_API + props.data.poster_path 
                : 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80'}
                alt = {props.data.title} 

            />
            <div className="movie-info">
            <h3>{props.data.title}</h3>
            <span className={`tag ${setVoteClass(props.data.vote_average)}`}>{props.data.vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>Overview: </h2>
                <p>{props.data.overview}</p>
            </div>
        </div>
    );
}

export default Movie;