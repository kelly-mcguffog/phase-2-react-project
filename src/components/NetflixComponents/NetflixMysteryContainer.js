import React, {useState} from "react";
import ContentCard from "../ContentCard";

function NetflixMysteryContainer({displayNetflixMystery}){
    const [netflixMysteryBeltPosition, setNetflixMysteryBeltPosition] = useState(0)
    const renderNetflixMystery = displayNetflixMystery.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceNetflixMysteryBelt(){
        if((displayNetflixMystery.length % 5 !== 0) && ((displayNetflixMystery.length - netflixMysteryBeltPosition) < 10) && ((displayNetflixMystery.length - netflixMysteryBeltPosition) > 5)){
            setNetflixMysteryBeltPosition(netflixMysteryBeltPosition + ((displayNetflixMystery.length % 5)))
        }else{
            setNetflixMysteryBeltPosition((netflixMysteryBeltPosition + 5) % displayNetflixMystery.length)
        }
    }
    function retreatNetflixMysteryBelt(){
        if(netflixMysteryBeltPosition > 0){
            setNetflixMysteryBeltPosition((netflixMysteryBeltPosition - 5) % displayNetflixMystery.length)
        }
    }

    return(
        <div className="mystery-Container">
            <h2>Mystery</h2>
            <button className="arrow-button" onClick={retreatNetflixMysteryBelt}><i className="arrow left"></i></button>
            {renderNetflixMystery.slice(netflixMysteryBeltPosition, netflixMysteryBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixMysteryBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default NetflixMysteryContainer;