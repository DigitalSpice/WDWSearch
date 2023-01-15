import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div>
            <input
                type='search'
                placeholder='search hotels'
                onChange={searchChange}
                />
        </div>
    )
}
export default SearchBox;