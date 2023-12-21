import React from "react";


const SearchBar = ({filterText, inStockOnly,onFilterTextChange,onInStockOnlyChange}) => {
    return (
        <form >
            <input type="text" onChange={(e)=>onFilterTextChange(e.target.value)}  value={filterText} placeholder="Search..." />
            <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
        </form>
    )
}

export default SearchBar;