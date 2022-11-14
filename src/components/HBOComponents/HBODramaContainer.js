import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HBODramaContainer({displayHBODramas}){
    const [hboDramaBeltPosition, setHBODramaBeltPosition] = useState(0)
    const renderHBODramas = displayHBODramas.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHBODramaBelt(){
        if((displayHBODramas.length % 6 !== 0) && ((displayHBODramas.length - hboDramaBeltPosition) < 12) && ((displayHBODramas.length - hboDramaBeltPosition) > 6)){
            setHBODramaBeltPosition(hboDramaBeltPosition + ((displayHBODramas.length % 6)))
        }else{
            setHBODramaBeltPosition((hboDramaBeltPosition + 6) % displayHBODramas.length)
        }
      }
      
      function retreatHBODramaBelt(){
        if(hboDramaBeltPosition > 0){
            setHBODramaBeltPosition((hboDramaBeltPosition - 6) % displayHBODramas.length)
        }
      }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Drama</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatHBODramaBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceHBODramaBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatHBODramaBelt}>{renderHBODramas.length > 6 ?<i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderHBODramas.slice(hboDramaBeltPosition, hboDramaBeltPosition+6)}
                <div className="arrow-button" onClick={advanceHBODramaBelt}>{renderHBODramas.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
        </div>
    )
}

export default HBODramaContainer;