import React from "react";

function HBOButton(){
    const hboUrl = "https://www.hbomax.com/";
   
    return(
        <a href={hboUrl} target="_blank"><button className="hboButton streamingButton">Streaming on HBO Max</button></a>
    )
}
export default HBOButton;