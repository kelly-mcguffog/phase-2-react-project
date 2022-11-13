import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HuluCrimeContainer({displayHuluCrime}){
    const [huluCrimeBeltPosition, setHuluCrimeBeltPosition] = useState(0)
    const renderHuluCrime = displayHuluCrime.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHuluCrimeBelt(){
        if((displayHuluCrime.length % 5 !== 0) && ((displayHuluCrime.length - huluCrimeBeltPosition) < 10) && ((displayHuluCrime.length - huluCrimeBeltPosition) > 5)){
            setHuluCrimeBeltPosition(huluCrimeBeltPosition + ((displayHuluCrime.length % 5)))
        }else{
            setHuluCrimeBeltPosition((huluCrimeBeltPosition + 5) % displayHuluCrime.length)
        }
    }
    function retreatHuluCrimeBelt(){
        if(huluCrimeBeltPosition > 0){
            setHuluCrimeBeltPosition((huluCrimeBeltPosition - 5) % displayHuluCrime.length)
        }
    }
    return(
        <div className="crime-Container">
            <h2>Crime</h2>
            <button className="arrow-button" onClick={retreatHuluCrimeBelt}><i className="arrow left"></i></button>
            {renderHuluCrime.slice(huluCrimeBeltPosition, huluCrimeBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHuluCrimeBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default HuluCrimeContainer;