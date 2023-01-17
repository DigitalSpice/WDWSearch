import React from 'react';

const Card = ({title, id, image_id, date_display, artist_display}) => {
    return (
        <div className='bg-lightest-blue ma2 flex flex-column flex-row-ns items-center'>
            <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns'>
                <img alt='art' src={`https://www.artic.edu/iiif/2/${image_id}/full/200,/0/default.jpg`} />
            </div>
            <div className='w-100 w-60-ns pl3-ns'>
                <h2 className='lh-title'>{title}</h2>
                <p className='lh-copy'>
                    {date_display}<br/>
                    {artist_display}<br/>
                    Gallery ID: {id}
                </p>
            </div>
        </div>
    );
}

export default Card;