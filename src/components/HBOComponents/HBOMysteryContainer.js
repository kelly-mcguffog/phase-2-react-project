import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HBOMysteryContainer({displayHBOMystery, handleEditMedia, setSearch}){
    const [hboMysteryBeltPosition, setHBOMysteryBeltPosition] = useState(0)
    const renderHBOMystery = displayHBOMystery.map(content => <ContentCard key={content.id} setSearch={setSearch} content={content} handleEditMedia={handleEditMedia}/>)

    function advanceHBOMysteryBelt(){
        if((displayHBOMystery.length % 6 !== 0) && ((displayHBOMystery.length - hboMysteryBeltPosition) < 12) && ((displayHBOMystery.length - hboMysteryBeltPosition) > 6)){
            setHBOMysteryBeltPosition(hboMysteryBeltPosition + ((displayHBOMystery.length % 6)))
        }else{
            setHBOMysteryBeltPosition((hboMysteryBeltPosition + 6) % displayHBOMystery.length)
        }
    }
    function retreatHBOMysteryBelt(){
        if(hboMysteryBeltPosition > 0){
            setHBOMysteryBeltPosition((hboMysteryBeltPosition - 6) % displayHBOMystery.length)
        }
    }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Mystery</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatHBOMysteryBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceHBOMysteryBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatHBOMysteryBelt}>{renderHBOMystery.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderHBOMystery.slice(hboMysteryBeltPosition, hboMysteryBeltPosition+6)}
                <div className="arrow-button" onClick={advanceHBOMysteryBelt}>{renderHBOMystery.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
            </div>
    )
}

export default HBOMysteryContainer;