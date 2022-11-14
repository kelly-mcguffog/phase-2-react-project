import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HuluThrillerContainer({displayHuluThriller}){
    const [huluThrillerBeltPosition, setHuluThrillerBeltPosition] = useState(0)
    const renderHuluThriller = displayHuluThriller.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHuluThrillerBelt(){
        if((displayHuluThriller.length % 6 !== 0) && ((displayHuluThriller.length - huluThrillerBeltPosition) < 12) && ((displayHuluThriller.length - huluThrillerBeltPosition) > 6)){
            setHuluThrillerBeltPosition(huluThrillerBeltPosition + ((displayHuluThriller.length % 6)))
        }else{
            setHuluThrillerBeltPosition((huluThrillerBeltPosition + 6) % displayHuluThriller.length)
        }
    }
    function retreatHuluThrillerBelt(){
        if(huluThrillerBeltPosition > 0){
            setHuluThrillerBeltPosition((huluThrillerBeltPosition - 6) % displayHuluThriller.length)
        }
    }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Thriller</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatHuluThrillerBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceHuluThrillerBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatHuluThrillerBelt}>{renderHuluThriller.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderHuluThriller.slice(huluThrillerBeltPosition, huluThrillerBeltPosition+6)}
                <div className="arrow-button" onClick={advanceHuluThrillerBelt}>{renderHuluThriller.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
        </div>
    )
}

export default HuluThrillerContainer;