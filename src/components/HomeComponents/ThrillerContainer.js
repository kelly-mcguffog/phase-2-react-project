import React, {useState} from "react";
import ContentCard from "../ContentCard";

function ThrillerContainer({displayThriller}){
    const [thrillerBeltPosition, setThrillerBeltPosition] = useState(0)
    const renderThriller = displayThriller.map(content => <ContentCard key={content.id} content={content}/>)

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
                <div className="arrow-button" onClick={retreatThrillerBelt}><i className="fa-sharp fa-solid fa-circle-chevron-left"></i></div>
                {renderThriller.slice(thrillerBeltPosition, thrillerBeltPosition+6)}
                <div className="arrow-button" onClick={advanceThrillerBelt}><i className="fa-sharp fa-solid fa-circle-chevron-right"></i></div>
            </div>
        </div>
    )
}

export default ThrillerContainer;