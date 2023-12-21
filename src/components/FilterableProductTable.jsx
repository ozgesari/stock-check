import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable=({products})=>{
    const [filterText, setFilterTex]=useState('');
    const [inStockOnly, setStockOnly]=useState(false);
    return (
        <div>
            <SearchBar  
            filterText={filterText} 
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterTex}
            onInStockOnlyChange={setStockOnly}
            />
            <ProductTable
            filterText={filterText}
            inStockOnly={inStockOnly}
            products={products}/>
        </div>
    )
}

export default FilterableProductTable;