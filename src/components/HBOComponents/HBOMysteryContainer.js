import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HBOMysteryContainer({displayHBOMystery}){
    const [hboMysteryBeltPosition, setHBOMysteryBeltPosition] = useState(0)
    const renderHBOMystery = displayHBOMystery.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHBOMysteryBelt(){
        if((displayHBOMystery.length % 5 !== 0) && ((displayHBOMystery.length - hboMysteryBeltPosition) < 10) && ((displayHBOMystery.length - hboMysteryBeltPosition) > 5)){
            setHBOMysteryBeltPosition(hboMysteryBeltPosition + ((displayHBOMystery.length % 5)))
        }else{
            setHBOMysteryBeltPosition((hboMysteryBeltPosition + 5) % displayHBOMystery.length)
        }
    }
    function retreatHBOMysteryBelt(){
        if(hboMysteryBeltPosition > 0){
            setHBOMysteryBeltPosition((hboMysteryBeltPosition - 5) % displayHBOMystery.length)
        }
    }

    return(
        <div className="mystery-Container">
                <h2>Mystery</h2>
            <button className="arrow-button" onClick={retreatHBOMysteryBelt}><i className="arrow left"></i></button>
            {renderHBOMystery.slice(hboMysteryBeltPosition, hboMysteryBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHBOMysteryBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default HBOMysteryContainer;