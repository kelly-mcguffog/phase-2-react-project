import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HuluActionContainer({displayHuluAction}){
    const [huluActionBeltPosition, setHuluActionBeltPosition] = useState(0)
    const renderHuluAction = displayHuluAction.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHuluActionBelt(){
        if((displayHuluAction.length % 6 !== 0) && ((displayHuluAction.length - huluActionBeltPosition) < 12) && ((displayHuluAction.length - huluActionBeltPosition) > 6)){
            setHuluActionBeltPosition(huluActionBeltPosition + ((displayHuluAction.length % 6)))
        }else{
            setHuluActionBeltPosition((huluActionBeltPosition + 6) % displayHuluAction.length)
        }
    }
    function retreatHuluActionBelt(){
        if(huluActionBeltPosition > 0){
            setHuluActionBeltPosition((huluActionBeltPosition - 6) % displayHuluAction.length)
        }
    }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Action</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatHuluActionBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceHuluActionBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatHuluActionBelt}><i className="fa-sharp fa-solid fa-circle-chevron-left"></i></div>
                {renderHuluAction.slice(huluActionBeltPosition, huluActionBeltPosition+6)}
                <div className="arrow-button" onClick={advanceHuluActionBelt}><i className="fa-sharp fa-solid fa-circle-chevron-right"></i></div>
            </div>
            </div>
    )
}

export default HuluActionContainer;