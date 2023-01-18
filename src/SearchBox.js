import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
            <input
                className="pa2 br--top b--yellow bg-washed-yellow input-reset w-100"
                type='search'
                id='searchbox'
                placeholder='search by artwork'
                onChange={searchChange}
                />
        </div>
    )
}
export default SearchBox;