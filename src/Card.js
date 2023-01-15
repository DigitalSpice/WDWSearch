import React from 'react';

const Card = ({name, id, address, url,cost_range, category_code, theme}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt='robots' src={`https://robohash.org/505?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{address}</p>
                <p>{url}</p>
                <p>{cost_range}</p>
                <p>{category_code}</p>
                <p>{theme}</p>
            </div>
        </div>
    );
}

export default Card;