import React, {useState} from "react";
import ContentCard from "../ContentCard";

function DramaContainer({displayDramas, handleEditMedia, setSearch}){
    const [dramaBeltPosition, setDramaBeltPosition] = useState(0)
    const renderDramas = displayDramas.map(content => <ContentCard key={content.id} content={content} handleEditMedia={handleEditMedia} setSearch={setSearch}/>)

    function advanceDramaBelt(){
        console.log(displayDramas.length - dramaBeltPosition)
        if((displayDramas.length % 6 !== 0) && ((displayDramas.length - dramaBeltPosition) < 12) && ((displayDramas.length - dramaBeltPosition) > 6)){
            setDramaBeltPosition(dramaBeltPosition + ((displayDramas.length % 6)))
        }else{
            setDramaBeltPosition((dramaBeltPosition + 6) % displayDramas.length)
        }
      }
      function retreatDramaBelt(){
        if(dramaBeltPosition > 0){
            setDramaBeltPosition((dramaBeltPosition - 6) % displayDramas.length)
        }
      }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Drama</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatDramaBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceDramaBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="back arrow-button" onClick={retreatDramaBelt}>{renderDramas.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderDramas.slice(dramaBeltPosition, dramaBeltPosition+6)}
                <div className="forward arrow-button" onClick={advanceDramaBelt}>{renderDramas.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
        </div>
    )
}

export default DramaContainer;