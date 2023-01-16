import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa3 ba'>
            <input
                className="pa2 br--top b--blue bg-washed-blue input-reset w-50"
                type='search'
                id='searchbox'
                placeholder='search artwork'
                onChange={searchChange}
                />
        </div>
    )
}
export default SearchBox;