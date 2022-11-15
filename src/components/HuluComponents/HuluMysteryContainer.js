import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HuluMysteryContainer({displayHuluMystery, handleEditMedia}){
    const [huluMysteryBeltPosition, setHuluMysteryBeltPosition] = useState(0)
    const renderHuluMystery = displayHuluMystery.map(content => <ContentCard key={content.id} content={content} handleEditMedia={handleEditMedia}/>)

    function advanceHuluMysteryBelt(){
        if((displayHuluMystery.length % 6 !== 0) && ((displayHuluMystery.length - huluMysteryBeltPosition) < 12) && ((displayHuluMystery.length - huluMysteryBeltPosition) > 6)){
            setHuluMysteryBeltPosition(huluMysteryBeltPosition + ((displayHuluMystery.length % 6)))
        }else{
            setHuluMysteryBeltPosition((huluMysteryBeltPosition + 6) % displayHuluMystery.length)
        }
    }
    function retreatHuluMysteryBelt(){
        if(huluMysteryBeltPosition > 0){
            setHuluMysteryBeltPosition((huluMysteryBeltPosition - 6) % displayHuluMystery.length)
        }
    }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Mystery</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatHuluMysteryBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceHuluMysteryBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatHuluMysteryBelt}>{renderHuluMystery.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderHuluMystery.slice(huluMysteryBeltPosition, huluMysteryBeltPosition+6)}
                <div className="arrow-button" onClick={advanceHuluMysteryBelt}>{renderHuluMystery.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
        </div>
    )
}

export default HuluMysteryContainer;