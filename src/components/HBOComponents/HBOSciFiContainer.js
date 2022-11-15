import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HBOSciFiContainer({displayHBOSciFi, handleEditMedia}){
    const [hboSciFiBeltPosition, setHBOSciFiBeltPosition] = useState(0)
    const renderHBOSciFi = displayHBOSciFi.map(content => <ContentCard key={content.id} content={content} handleEditMedia={handleEditMedia}/>)
    function advanceHBOSciFiBelt(){
        if((displayHBOSciFi.length % 6 !== 0) && ((displayHBOSciFi.length - hboSciFiBeltPosition) < 12) && ((displayHBOSciFi.length - hboSciFiBeltPosition) > 6)){
            setHBOSciFiBeltPosition(hboSciFiBeltPosition + ((displayHBOSciFi.length % 6)))
        }else{
            setHBOSciFiBeltPosition((hboSciFiBeltPosition + 6) % displayHBOSciFi.length)
        }
    }
    function retreatHBOSciFiBelt(){
        if(hboSciFiBeltPosition > 0){
            setHBOSciFiBeltPosition((hboSciFiBeltPosition - 6) % displayHBOSciFi.length)
        }
    }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Sci-Fi</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatHBOSciFiBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceHBOSciFiBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatHBOSciFiBelt}>{renderHBOSciFi.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderHBOSciFi.slice(hboSciFiBeltPosition, hboSciFiBeltPosition+6)}
                <div className="arrow-button" onClick={advanceHBOSciFiBelt}>{renderHBOSciFi.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
        </div>
    )
}

export default HBOSciFiContainer;