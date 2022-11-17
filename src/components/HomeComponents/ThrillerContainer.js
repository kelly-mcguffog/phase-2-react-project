import React, {useState} from "react";
import ContentCard from "../ContentCard";

function ThrillerContainer({displayThriller, handleEditMedia, setSearch}){
    const [thrillerBeltPosition, setThrillerBeltPosition] = useState(0)
    const renderThriller = displayThriller.map(content => <ContentCard key={content.id} setSearch={setSearch} content={content} handleEditMedia={handleEditMedia}/>)

    function advanceThrillerBelt(){
        if((displayThriller.length % 6 !== 0) && ((displayThriller.length - thrillerBeltPosition) < 12) && ((displayThriller.length - thrillerBeltPosition) > 6)){
            setThrillerBeltPosition(thrillerBeltPosition + ((displayThriller.length % 6)))
        }else{
            setThrillerBeltPosition((thrillerBeltPosition + 6) % displayThriller.length)
        }
    }
    function retreatThrillerBelt(){
        if(thrillerBeltPosition > 0){
            setThrillerBeltPosition((thrillerBeltPosition - 6) % displayThriller.length)
        }
    }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Thriller</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatThrillerBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceThrillerBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatThrillerBelt}>{renderThriller.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderThriller.slice(thrillerBeltPosition, thrillerBeltPosition+6)}
                <div className="arrow-button" onClick={advanceThrillerBelt}>{renderThriller.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
        </div>
    )
}

export default ThrillerContainer;