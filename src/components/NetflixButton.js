import React from "react";

function NetflixButton(){
    const netflixUrl = "https://www.netflix.com/";

    return(
        <a href={netflixUrl} target="_blank"><button className="netflixButton streamingButton"><i className="fa-solid fa-play"></i> Watch Now</button></a>
    )
}
export default NetflixButton;