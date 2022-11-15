import React, {useState} from "react";
import ContentCard from "../ContentCard";

function NetflixSciFiContainer({displayNetflixSciFi, handleEditMedia}){
    const [netflixSciFiBeltPosition, setNetflixSciFiBeltPosition] = useState(0)
    const renderNetflixSciFi = displayNetflixSciFi.map(content => <ContentCard key={content.id} content={content} handleEditMedia={handleEditMedia}/>)

        function advanceNetflixSciFiBelt(){
            if((displayNetflixSciFi.length % 6 !== 0) && ((displayNetflixSciFi.length - netflixSciFiBeltPosition) < 12) && ((displayNetflixSciFi.length - netflixSciFiBeltPosition) > 6)){
                setNetflixSciFiBeltPosition(netflixSciFiBeltPosition + ((displayNetflixSciFi.length % 6)))
            }else{
                setNetflixSciFiBeltPosition((netflixSciFiBeltPosition + 6) % displayNetflixSciFi.length)
            }
        }
        function retreatNetflixSciFiBelt(){
            if(netflixSciFiBeltPosition > 0){
                setNetflixSciFiBeltPosition((netflixSciFiBeltPosition - 6) % displayNetflixSciFi.length)
            }
        }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Sci-Fi</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatNetflixSciFiBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceNetflixSciFiBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatNetflixSciFiBelt}>{renderNetflixSciFi.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderNetflixSciFi.slice(netflixSciFiBeltPosition, netflixSciFiBeltPosition+6)}
                <div className="arrow-button" onClick={advanceNetflixSciFiBelt}>{renderNetflixSciFi.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
        </div>
    )
}

export default NetflixSciFiContainer;