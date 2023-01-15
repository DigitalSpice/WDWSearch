import React from 'react';
import Card from './Card';

const CardList = ({hotels}) => {
    return (
        <>
            {hotels.map((hotel, i) =>{
                return (
                    <Card 
                        key={i} 
                        id={hotels[i].id} 
                        name={hotels[i].name} 
                        address={hotels[i].address}
                        url={hotels[i].url}
                        cost_range={hotels[i].cost_range}
                        category_code={hotels[i].category_code}
                        theme={hotels[i].theme}
                    />
                );
            })
            }
        </>
    );
}

export default CardList;