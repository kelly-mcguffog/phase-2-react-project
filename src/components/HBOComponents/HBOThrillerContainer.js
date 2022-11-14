import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HBOThrillerContainer({displayHBOThriller}){
    const [hboThrillerBeltPosition, setHBOThrillerBeltPosition] = useState(0)
    const renderHBOThriller = displayHBOThriller.map(content => <ContentCard key={content.id} content={content}/>)

        function advanceHBOThrillerBelt(){
            if((displayHBOThriller.length % 6 !== 0) && ((displayHBOThriller.length - hboThrillerBeltPosition) < 12) && ((displayHBOThriller.length - hboThrillerBeltPosition) > 6)){
                setHBOThrillerBeltPosition(hboThrillerBeltPosition + ((displayHBOThriller.length % 6)))
            }else{
                setHBOThrillerBeltPosition((hboThrillerBeltPosition + 6) % displayHBOThriller.length)
            }
        }
        function retreatHBOThrillerBelt(){
            if(hboThrillerBeltPosition > 0){
                setHBOThrillerBeltPosition((hboThrillerBeltPosition - 6) % displayHBOThriller.length)
            }
        }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Thriller</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatHBOThrillerBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceHBOThrillerBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatHBOThrillerBelt}>{renderHBOThriller.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderHBOThriller.slice(hboThrillerBeltPosition, hboThrillerBeltPosition+6)}
                <div className="arrow-button" onClick={advanceHBOThrillerBelt}>{renderHBOThriller.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
            </div>
        </div>
    )
}

export default HBOThrillerContainer;