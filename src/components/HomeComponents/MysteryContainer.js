import React, {useState} from "react";
import ContentCard from "../ContentCard";

function MysteryContainer({displayMystery}){
    const [mysteryBeltPosition, setMysteryBeltPosition] = useState(0)
    const renderMystery = displayMystery.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceMysteryBelt(){
        if((displayMystery.length % 6 !== 0) && ((displayMystery.length - mysteryBeltPosition) < 12) && ((displayMystery.length - mysteryBeltPosition) > 6)){
            setMysteryBeltPosition(mysteryBeltPosition + ((displayMystery.length % 6)))
        }else{
            setMysteryBeltPosition((mysteryBeltPosition + 6) % displayMystery.length)
        }
    }
    function retreatMysteryBelt(){
        if(mysteryBeltPosition > 0){
            setMysteryBeltPosition((mysteryBeltPosition - 6) % displayMystery.length)
        }
    }

    return(
        <div className="media-container">
                <div className="genre-header">
                <h2>Mystery</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatMysteryBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceMysteryBelt}><i className="arrow right"></i></div>
                </div>
            </div>
                <div className="row">
                    <div className="arrow-button" onClick={retreatMysteryBelt}><i className="fa-sharp fa-solid fa-circle-chevron-left"></i></div>
                    {renderMystery.slice(mysteryBeltPosition, mysteryBeltPosition+6)}
                    <div className="arrow-button" onClick={advanceMysteryBelt}><i className="fa-sharp fa-solid fa-circle-chevron-right"></i></div>
                </div>
            </div>
    )
}

export default MysteryContainer;