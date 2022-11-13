import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HuluActionContainer({displayHuluAction}){
    const [huluActionBeltPosition, setHuluActionBeltPosition] = useState(0)
    const renderHuluAction = displayHuluAction.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHuluActionBelt(){
        if((displayHuluAction.length % 5 !== 0) && ((displayHuluAction.length - huluActionBeltPosition) < 10) && ((displayHuluAction.length - huluActionBeltPosition) > 5)){
            setHuluActionBeltPosition(huluActionBeltPosition + ((displayHuluAction.length % 5)))
        }else{
            setHuluActionBeltPosition((huluActionBeltPosition + 5) % displayHuluAction.length)
        }
    }
    function retreatHuluActionBelt(){
        if(huluActionBeltPosition > 0){
            setHuluActionBeltPosition((huluActionBeltPosition - 5) % displayHuluAction.length)
        }
    }

    return(
        <div className="action-Container">
            <h2>Action</h2>
            <button className="arrow-button" onClick={retreatHuluActionBelt}><i className="arrow left"></i></button>
            {renderHuluAction.slice(huluActionBeltPosition, huluActionBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHuluActionBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default HuluActionContainer;