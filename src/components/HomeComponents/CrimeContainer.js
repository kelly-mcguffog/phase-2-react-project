import React, {useState} from "react";
import ContentCard from "../ContentCard";

function CrimeContainer({displayCrime}){
    const [crimeBeltPosition, setCrimeBeltPosition] = useState(0)
    const renderCrime = displayCrime.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceCrimeBelt(){
        if((displayCrime.length % 5 !== 0) && ((displayCrime.length - crimeBeltPosition) < 10) && ((displayCrime.length - crimeBeltPosition) > 5)){
            setCrimeBeltPosition(crimeBeltPosition + ((displayCrime.length % 5)))
        }else{
            setCrimeBeltPosition((crimeBeltPosition + 5) % displayCrime.length)
        }
    }
    function retreatCrimeBelt(){
        if(crimeBeltPosition > 0){
            setCrimeBeltPosition((crimeBeltPosition - 5) % displayCrime.length)
        }
    }

    return(
        <div className="crime-Container">
                <h2>Crime</h2>
                <button className="arrow-button" onClick={retreatCrimeBelt}><i className="arrow left"></i></button>
                {renderCrime.slice(crimeBeltPosition, crimeBeltPosition+5)}
                <button className="arrow-button" onClick={advanceCrimeBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default CrimeContainer;