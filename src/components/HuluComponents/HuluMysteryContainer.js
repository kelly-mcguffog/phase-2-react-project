import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HuluMysteryContainer({displayHuluMystery}){
    const [huluMysteryBeltPosition, setHuluMysteryBeltPosition] = useState(0)
    const renderHuluMystery = displayHuluMystery.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHuluMysteryBelt(){
        if((displayHuluMystery.length % 5 !== 0) && ((displayHuluMystery.length - huluMysteryBeltPosition) < 10) && ((displayHuluMystery.length - huluMysteryBeltPosition) > 5)){
            setHuluMysteryBeltPosition(huluMysteryBeltPosition + ((displayHuluMystery.length % 5)))
        }else{
            setHuluMysteryBeltPosition((huluMysteryBeltPosition + 5) % displayHuluMystery.length)
        }
    }
    function retreatHuluMysteryBelt(){
        if(huluMysteryBeltPosition > 0){
            setHuluMysteryBeltPosition((huluMysteryBeltPosition - 5) % displayHuluMystery.length)
        }
    }

    return(
        <div className="mystery-Container">
            <h2>Mystery</h2>
            <button className="arrow-button" onClick={retreatHuluMysteryBelt}><i className="arrow left"></i></button>
            {renderHuluMystery.slice(huluMysteryBeltPosition, huluMysteryBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHuluMysteryBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default HuluMysteryContainer;