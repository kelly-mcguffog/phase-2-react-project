import React, {useState} from "react";
import ContentCard from "../ContentCard";

function NetflixSciFiContainer({displayNetflixSciFi}){
    const [netflixSciFiBeltPosition, setNetflixSciFiBeltPosition] = useState(0)
    const renderNetflixSciFi = displayNetflixSciFi.map(content => <ContentCard key={content.id} content={content}/>)

        function advanceNetflixSciFiBelt(){
            if((displayNetflixSciFi.length % 5 !== 0) && ((displayNetflixSciFi.length - netflixSciFiBeltPosition) < 10) && ((displayNetflixSciFi.length - netflixSciFiBeltPosition) > 5)){
                setNetflixSciFiBeltPosition(netflixSciFiBeltPosition + ((displayNetflixSciFi.length % 5)))
            }else{
                setNetflixSciFiBeltPosition((netflixSciFiBeltPosition + 5) % displayNetflixSciFi.length)
            }
        }
        function retreatNetflixSciFiBelt(){
            if(netflixSciFiBeltPosition > 0){
                setNetflixSciFiBeltPosition((netflixSciFiBeltPosition - 5) % displayNetflixSciFi.length)
            }
        }

    return(
        <div className="scifi-Container">
           <h2>Sci-Fi</h2>
            <button className="arrow-button" onClick={retreatNetflixSciFiBelt}><i className="arrow left"></i></button>
            {renderNetflixSciFi.slice(netflixSciFiBeltPosition, netflixSciFiBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixSciFiBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default NetflixSciFiContainer;