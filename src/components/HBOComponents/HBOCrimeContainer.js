import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HBOCrimeContainer({displayHBOCrime}){
    const [hboCrimeBeltPosition, setHBOCrimeBeltPosition] = useState(0)
    const renderHBOCrime = displayHBOCrime.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHBOCrimeBelt(){
        if((displayHBOCrime.length % 5 !== 0) && ((displayHBOCrime.length - hboCrimeBeltPosition) < 10) && ((displayHBOCrime.length - hboCrimeBeltPosition) > 5)){
            setHBOCrimeBeltPosition(hboCrimeBeltPosition + ((displayHBOCrime.length % 5)))
        }else{
            setHBOCrimeBeltPosition((hboCrimeBeltPosition + 5) % displayHBOCrime.length)
        }
    }
    function retreatHBOCrimeBelt(){
        if(hboCrimeBeltPosition > 0){
            setHBOCrimeBeltPosition((hboCrimeBeltPosition - 5) % displayHBOCrime.length)
        }
    }
    return(
        <div className="crime-Container">
                <h2>Crime</h2>
            <button className="arrow-button" onClick={retreatHBOCrimeBelt}><i className="arrow left"></i></button>
            {renderHBOCrime.slice(hboCrimeBeltPosition, hboCrimeBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHBOCrimeBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default HBOCrimeContainer;