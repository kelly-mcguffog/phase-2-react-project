import React, {useState} from "react";
import ContentCard from "../ContentCard";

function NetflixRomanceContainer({displayNetflixRomance}){
    const [netflixRomanceBeltPosition, setNetflixRomanceBeltPosition] = useState(0)
    const renderNetflixRomance = displayNetflixRomance.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceNetflixRomanceBelt(){
        if((displayNetflixRomance.length % 6 !== 0) && ((displayNetflixRomance.length - netflixRomanceBeltPosition) < 12) && ((displayNetflixRomance.length - netflixRomanceBeltPosition) > 6)){
            setNetflixRomanceBeltPosition(netflixRomanceBeltPosition + ((displayNetflixRomance.length % 6)))
        }else{
            setNetflixRomanceBeltPosition((netflixRomanceBeltPosition + 6) % displayNetflixRomance.length)
        }
    }
    function retreatNetflixRomanceBelt(){
        if(netflixRomanceBeltPosition > 0){
            setNetflixRomanceBeltPosition((netflixRomanceBeltPosition - 6) % displayNetflixRomance.length)
        }
    }

    return(
            <div className="media-container">
            <div className="genre-header">
                <h2>Romance</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatNetflixRomanceBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceNetflixRomanceBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatNetflixRomanceBelt}>{renderNetflixRomance.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderNetflixRomance.slice(netflixRomanceBeltPosition, netflixRomanceBeltPosition+6)}
                <div className="arrow-button" onClick={advanceNetflixRomanceBelt}>{renderNetflixRomance.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
            </div>
    )
}

export default NetflixRomanceContainer;