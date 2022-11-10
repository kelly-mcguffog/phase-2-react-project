import React from "react";

function Search({search, setSearch}){
    return (
        <div className="search">
            <input placeholder="search..." onChange={(e)=> setSearch(e.target.value)} className="input-search" value={search}/>
        </div>
      );    
}

export default Search;