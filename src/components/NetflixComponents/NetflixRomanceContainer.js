import React, {useState} from "react";
import ContentCard from "../ContentCard";

function NetflixRomanceContainer({displayNetflixRomance}){
    const [netflixRomanceBeltPosition, setNetflixRomanceBeltPosition] = useState(0)
    const renderNetflixRomance = displayNetflixRomance.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceNetflixRomanceBelt(){
        if((displayNetflixRomance.length % 5 !== 0) && ((displayNetflixRomance.length - netflixRomanceBeltPosition) < 10) && ((displayNetflixRomance.length - netflixRomanceBeltPosition) > 5)){
            setNetflixRomanceBeltPosition(netflixRomanceBeltPosition + ((displayNetflixRomance.length % 5)))
        }else{
            setNetflixRomanceBeltPosition((netflixRomanceBeltPosition + 5) % displayNetflixRomance.length)
        }
    }
    function retreatNetflixRomanceBelt(){
        if(netflixRomanceBeltPosition > 0){
            setNetflixRomanceBeltPosition((netflixRomanceBeltPosition - 5) % displayNetflixRomance.length)
        }
    }

    return(
            <div className="romance-Container">
            <h2>Romance</h2>
            <button className="arrow-button" onClick={retreatNetflixRomanceBelt}><i className="arrow left"></i></button>
            {renderNetflixRomance.slice(netflixRomanceBeltPosition, netflixRomanceBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixRomanceBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default NetflixRomanceContainer;