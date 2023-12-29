import React from "react";

function Filter({ handleFilter }) {

        return (
                <select onChange={handleFilter} className="filterCategory">
                        <option name="category" value="All">All</option>
                        <option name="category" value="Movie">Movie</option>
                        <option name="category" value="TV Show">TV Show</option>
                </select>
        );
}

export default Filter;