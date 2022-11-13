import React, {useState} from "react";
import ContentCard from "../ContentCard";

function MysteryContainer({displayMystery}){
    const [mysteryBeltPosition, setMysteryBeltPosition] = useState(0)
    const renderMystery = displayMystery.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceMysteryBelt(){
        if((displayMystery.length % 5 !== 0) && ((displayMystery.length - mysteryBeltPosition) < 10) && ((displayMystery.length - mysteryBeltPosition) > 5)){
            setMysteryBeltPosition(mysteryBeltPosition + ((displayMystery.length % 5)))
        }else{
            setMysteryBeltPosition((mysteryBeltPosition + 5) % displayMystery.length)
        }
    }
    function retreatMysteryBelt(){
        if(mysteryBeltPosition > 0){
            setMysteryBeltPosition((mysteryBeltPosition - 5) % displayMystery.length)
        }
    }

    return(
        <div className="mystery-Container">
                <h2>Mystery</h2>
                <button className="arrow-button" onClick={retreatMysteryBelt}><i className="arrow left"></i></button>
                {renderMystery.slice(mysteryBeltPosition, mysteryBeltPosition+5)}
                <button className="arrow-button" onClick={advanceMysteryBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default MysteryContainer;