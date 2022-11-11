import React from "react";

function Details({content}){
    const {title, genre, category, platform, description, trailer} = content
    return(
        <div className="content-details">
            <div className="trailer-clip">
                <iframe className="trailer" src={trailer}>
                </iframe>
            </div>
            <div className="details">
                <h3 className="details-title">{title}</h3>
                <p className="content-info">{genre} | {category}</p>
                <p className="content-info streaming-info">Streaming on {platform}</p>
                <p className="content-info">{description}</p>
            </div>
        </div>
    )
}
export default Details;