import React, {useState} from "react";
import ContentCard from "../ContentCard";

function SciFiContainer({displaySciFi}){
    const [sciFiBeltPosition, setSciFiBeltPosition] = useState(0)
    const renderSciFi = displaySciFi.map(content => <ContentCard key={content.id} content={content}/>)
    function advanceSciFiBelt(){
        if((displaySciFi.length % 5 !== 0) && ((displaySciFi.length - sciFiBeltPosition) < 10) && ((displaySciFi.length - sciFiBeltPosition) > 5)){
            setSciFiBeltPosition(sciFiBeltPosition + ((displaySciFi.length % 5)))
        }else{
            setSciFiBeltPosition((sciFiBeltPosition + 5) % displaySciFi.length)
        }
    }
    function retreatSciFiBelt(){
        if(sciFiBeltPosition > 0){
            setSciFiBeltPosition((sciFiBeltPosition - 5) % displaySciFi.length)
        }
    }

    return(
        <div className="scifi-Container">
                <h2>Sci-Fi</h2>
                <button className="arrow-button" onClick={retreatSciFiBelt}><i className="arrow left"></i></button>
                {renderSciFi.slice(sciFiBeltPosition, sciFiBeltPosition+5)}
                <button className="arrow-button" onClick={advanceSciFiBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default SciFiContainer;