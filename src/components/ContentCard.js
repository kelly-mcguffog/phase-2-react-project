import React from "react";
import { Link, } from "react-router-dom";

function ContentCard({ content }) {
    const { id, title, image } = content
    return (
        <Link to={`/${id}`}>
        <div className="content-card">
            <img className="card-image" src={image} alt={title}></img>
            <div className="card-text">
            <h3 className="card-title">{title}</h3>
            <p className="see-more">View Details</p>
            </div>
        </div>
        </Link>
    )
}

export default ContentCard;