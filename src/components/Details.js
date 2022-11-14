import React from "react";
import HBOButton from "./HBOButton"
import HuluButton from "./HuluButton";
import NetflixButton from "./NetflixButton";

function Details({content}){
    const {title, genre, category, platform, description, trailer} = content

    // const [isShowingDetails, setDetails] = useState(false)

    // function showDetails(){
    //     setDetails(isShowingDetails => !isShowingDetails)
    // }

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
                <iframe frameBorder="0" className="trailer" src={trailer} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen>
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