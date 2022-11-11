import React from "react";

function Search({search, setSearch, handleFilter}){

    // const filterCategory = filter === "all" ? allContent : allContent.filter(content => content.category.includes(filter))
    // console.log(filterCategory)

    return (
        <>
        <div className="search">
            <input placeholder="search..." onChange={(e)=> setSearch(e.target.value)} className="input-search" value={search}/>
        </div>
        <div onChange={handleFilter} className="filterCategory">
                Filter:
                <input type="radio" name="category" value="All"/>All
                <input type="radio" name="category" value="Movie"/>Movie
                <input type="radio" name="category" value="TV Show"/>TV Show
        </div>
        </>
      );    
}

export default Search;