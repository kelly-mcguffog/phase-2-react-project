import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HuluDramaContainer({displayHuluDramas}){
    const [huluDramaBeltPosition, setHuluDramaBeltPosition] = useState(0)
    const renderHuluDramas = displayHuluDramas.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHuluDramaBelt(){
        if((displayHuluDramas.length % 6 !== 0) && ((displayHuluDramas.length - huluDramaBeltPosition) < 12) && ((displayHuluDramas.length - huluDramaBeltPosition) > 6)){
            setHuluDramaBeltPosition(huluDramaBeltPosition + ((displayHuluDramas.length % 6)))
        }else{
            setHuluDramaBeltPosition((huluDramaBeltPosition + 6) % displayHuluDramas.length)
        }
      }
      function retreatHuluDramaBelt(){
        if(huluDramaBeltPosition > 0){
            setHuluDramaBeltPosition((huluDramaBeltPosition - 6) % displayHuluDramas.length)
        }
      }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Drama</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatHuluDramaBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceHuluDramaBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatHuluDramaBelt}>{renderHuluDramas.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderHuluDramas.slice(huluDramaBeltPosition, huluDramaBeltPosition+6)}
                <div className="arrow-button" onClick={advanceHuluDramaBelt}>{renderHuluDramas.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
        </div>
    )
}

export default HuluDramaContainer;