import React from "react";

function Search({search, setSearch}){
    return (
        <>
        <div className="filterCategory">
                <input type="radio" name="category" value="all"/>All
                <input type="radio" name="category" value="movie"/>Movie
                <input type="radio" name="category" value="tv"/>TV Show
        </div>
        <div className="search">
            <input placeholder="search..." onChange={(e)=> setSearch(e.target.value)} className="input-search" value={search}/>
        </div>
        </>
      );    
}

export default Search;