import React from "react";

function Details({content}){
    const {title, genre, image, platform, description, trailer} = content
    return(
        <div className="content-details">
            <div className="trailer-clip">
                <iframe className="trailer" src={trailer}>
                </iframe>
            </div>
            <div className="details">
                <h3>{title}</h3>
                <p>{platform}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Details;