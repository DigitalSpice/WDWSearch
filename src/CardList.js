import React from 'react';
import Card from './Card';

const CardList = ({characters}) => {
    return (
        <>
            {characters.map((character, i) =>{
                return (
                    <Card 
                        key={i} 
                        id={characters[i]._id} 
                        name={characters[i].name} 
                        imageUrl={characters[i].imageUrl}
                        films={characters[i].films}
                        shortFilms={characters[i].shortFilms}
                        tvShows={characters[i].tvShows}
                        videoGames={characters[i].videoGames}
                    />
                );
            })
            }
        </>
    );
}

export default CardList;