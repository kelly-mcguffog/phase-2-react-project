import React from "react";

function HuluButton(){
    const huluUrl = "https://www.hulu.com/welcome?orig_referrer=https%3A%2F%2Fwww.google.com%2F";
    return(
        <a href={huluUrl} target="_blank"><button className="huluButton streamingButton"><i className="fa-solid fa-play"></i> Watch Now</button></a>
    )
}
export default HuluButton;