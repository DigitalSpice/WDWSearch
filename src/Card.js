import React from 'react';

const Card = ({title, id, image_id, date_display, artist_display}) => {
    return (
        <div className='bg-lightest-blue ma2 flex flex-row-ns items-center w-80 center grow'>
            <div className='pr3-ns mb4 mb0-ns w-40-ns flex items-center'>
                <img alt='art' src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`} />
            </div>
            <div className='w-100 w-60-ns pr4-ns'>
                <h2 className='lh-title mb0'>{title}</h2>
                <p className='lh-copy'>
                    <em>Finished: {date_display}</em><br/>
                    <b>{artist_display}</b><br/>
                    Art Institute of Chicago Gallery ID: {id}
                </p>
            </div>
        </div>
    );
}

export default Card;