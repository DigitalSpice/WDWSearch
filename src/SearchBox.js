import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div>
            <input
                type='search'
                placeholder='search characters'
                onChange={searchChange}
                />
        </div>
    )
}
export default SearchBox;