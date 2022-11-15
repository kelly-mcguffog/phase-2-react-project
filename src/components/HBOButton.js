import React from "react";

function HBOButton(){
    const hboUrl = "https://www.hbomax.com/";
   
    return(
        <a href={hboUrl} target="_blank" rel="noreferrer"><button className="hboButton streamingButton"><i className="fa-solid fa-play"></i> Watch Now</button></a>
    )
}
export default HBOButton;