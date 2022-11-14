import React, {useState} from "react";
import ContentCard from "../ContentCard";

function SciFiContainer({displaySciFi}){
    const [sciFiBeltPosition, setSciFiBeltPosition] = useState(0)
    const renderSciFi = displaySciFi.map(content => <ContentCard key={content.id} content={content}/>)
    function advanceSciFiBelt(){
        if((displaySciFi.length % 6 !== 0) && ((displaySciFi.length - sciFiBeltPosition) < 12) && ((displaySciFi.length - sciFiBeltPosition) > 6)){
            setSciFiBeltPosition(sciFiBeltPosition + ((displaySciFi.length % 6)))
        }else{
            setSciFiBeltPosition((sciFiBeltPosition + 6) % displaySciFi.length)
        }
    }
    function retreatSciFiBelt(){
        if(sciFiBeltPosition > 0){
            setSciFiBeltPosition((sciFiBeltPosition - 6) % displaySciFi.length)
        }
    }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Sci-Fi</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatSciFiBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceSciFiBelt}><i className="arrow right"></i></div>
                </div>
            </div>
                <div className="row">
                    <div className="arrow-button" onClick={retreatSciFiBelt}><i className="fa-sharp fa-solid fa-circle-chevron-left"></i></div>
                    {renderSciFi.slice(sciFiBeltPosition, sciFiBeltPosition+6)}
                    <div className="arrow-button" onClick={advanceSciFiBelt}><i className="fa-sharp fa-solid fa-circle-chevron-right"></i></div>
                </div>
            </div>
    )
}

export default SciFiContainer;