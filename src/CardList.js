import React from 'react';
import Card from './Card';

const CardList = ({artWorks}) => {
    try { 
        console.log("CardList:", artWorks[0].title);
      } catch (error) {
        console.log(error)
      }
    return (
        <>
            {artWorks.map((artWork) =>{
                return (
                    <Card 
                        title={artWork.title} 
                        image_id={artWork.image_id}
                        date_display={artWork.date_display}
                        artist_display={artWork.artist_display}
                        id={artWork.id}
                    />
                );
            })
            }
        </>
    );
}

export default CardList;