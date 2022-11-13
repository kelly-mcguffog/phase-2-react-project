import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HBOSciFiContainer({displayHBOSciFi}){
    const [hboSciFiBeltPosition, setHBOSciFiBeltPosition] = useState(0)
    const renderHBOSciFi = displayHBOSciFi.map(content => <ContentCard key={content.id} content={content}/>)
    function advanceHBOSciFiBelt(){
        if((displayHBOSciFi.length % 5 !== 0) && ((displayHBOSciFi.length - hboSciFiBeltPosition) < 10) && ((displayHBOSciFi.length - hboSciFiBeltPosition) > 5)){
            setHBOSciFiBeltPosition(hboSciFiBeltPosition + ((displayHBOSciFi.length % 5)))
        }else{
            setHBOSciFiBeltPosition((hboSciFiBeltPosition + 5) % displayHBOSciFi.length)
        }
    }
    function retreatHBOSciFiBelt(){
        if(hboSciFiBeltPosition > 0){
            setHBOSciFiBeltPosition((hboSciFiBeltPosition - 5) % displayHBOSciFi.length)
        }
    }

    return(
        <div className="scifi-Container">
                <h2>Sci-Fi</h2>
            <button className="arrow-button" onClick={retreatHBOSciFiBelt}><i className="arrow left"></i></button>
            {renderHBOSciFi.slice(hboSciFiBeltPosition, hboSciFiBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHBOSciFiBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default HBOSciFiContainer;