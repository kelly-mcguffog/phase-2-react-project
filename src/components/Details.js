import React from "react";
import HBOButton from "./HBOButton"
import HuluButton from "./HuluButton";
import NetflixButton from "./NetflixButton";

function Details({content}){
    const {title, genre, category, platform, description, trailer} = content

    // const hboUrl = "https://www.hbomax.com/";
    // const netflixUrl = "https://www.netflix.com/";
    // const huluUrl = "https://www.hulu.com/welcome?orig_referrer=https%3A%2F%2Fwww.google.com%2F";


    function streamingButton(){
        if(platform === "HBO Max"){
            return <HBOButton />
        }else if(platform === "Hulu"){
            return <HuluButton />
        }else{
            return <NetflixButton />
        }
    }

    return(
        <div className="content-details">
            <div className="trailer-clip">
                <iframe className="trailer" src={trailer}>
                </iframe>
            </div>
            <div className="details">
                <h3 className="details-title">{title}</h3>
                <p className="content-info">{genre} | {category}</p>
                {streamingButton()}
                <p className="content-info">{description}</p>
            </div>
        </div>
    )
}
export default Details;