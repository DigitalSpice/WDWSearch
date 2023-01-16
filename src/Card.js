import React from 'react';

const Card = ({name, id, imageUrl, films, shortFilms, tvShows, videoGames}) => {
    return (
        <div>
            <img alt='character pic' src={`${imageUrl}`} />
            <div>
                <h2>{name}</h2>
                <p>Seen in:</p>
                <p>{films}</p>
                <p>{shortFilms}</p>
                <p>{tvShows}</p>
                <p>{videoGames}</p>
                <p>ID: {id}</p>
            </div>
        </div>
    );
}

export default Card;