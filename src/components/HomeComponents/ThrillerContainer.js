import React, {useState} from "react";
import ContentCard from "../ContentCard";

function ThrillerContainer({displayThriller}){
    const [thrillerBeltPosition, setThrillerBeltPosition] = useState(0)
    const renderThriller = displayThriller.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceThrillerBelt(){
        if((displayThriller.length % 5 !== 0) && ((displayThriller.length - thrillerBeltPosition) < 10) && ((displayThriller.length - thrillerBeltPosition) > 5)){
            setThrillerBeltPosition(thrillerBeltPosition + ((displayThriller.length % 5)))
        }else{
            setThrillerBeltPosition((thrillerBeltPosition + 5) % displayThriller.length)
        }
    }
    function retreatThrillerBelt(){
        if(thrillerBeltPosition > 0){
            setThrillerBeltPosition((thrillerBeltPosition - 5) % displayThriller.length)
        }
    }

    return(
        <div className="thriller-Container">
            <h2>Thriller</h2>
            <button className="arrow-button" onClick={retreatThrillerBelt}><i className="arrow left"></i></button>
            {renderThriller.slice(thrillerBeltPosition, thrillerBeltPosition+5)}
            <button className="arrow-button" onClick={advanceThrillerBelt}><i className="arrow right"></i></button>
        </div>
    )
}

export default ThrillerContainer;