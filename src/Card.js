import React from 'react';

const Card = ({title, id, image_id, date_display, artist_display}) => {
    return (
        <div className='db bg-lightest-blue br2 ma3 grow shadow-3 pv4'>
            <img alt='art' className='' src={`https://www.artic.edu/iiif/2/${image_id}/full/200,/0/default.jpg`} />
            <div className='pa2'>
                <h2>{title}</h2>
                <h3>{date_display}</h3>
                <p>{artist_display}</p>
                <p>Gallery ID: {id}</p>
            </div>
        </div>
    );
}

export default Card;