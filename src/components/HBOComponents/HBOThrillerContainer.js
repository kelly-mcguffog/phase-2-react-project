import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HBOThrillerContainer({displayHBOThriller}){
    const [hboThrillerBeltPosition, setHBOThrillerBeltPosition] = useState(0)
    const renderHBOThriller = displayHBOThriller.map(content => <ContentCard key={content.id} content={content}/>)

        function advanceHBOThrillerBelt(){
            if((displayHBOThriller.length % 5 !== 0) && ((displayHBOThriller.length - hboThrillerBeltPosition) < 10) && ((displayHBOThriller.length - hboThrillerBeltPosition) > 5)){
                setHBOThrillerBeltPosition(hboThrillerBeltPosition + ((displayHBOThriller.length % 5)))
            }else{
                setHBOThrillerBeltPosition((hboThrillerBeltPosition + 5) % displayHBOThriller.length)
            }
        }
        function retreatHBOThrillerBelt(){
            if(hboThrillerBeltPosition > 0){
                setHBOThrillerBeltPosition((hboThrillerBeltPosition - 5) % displayHBOThriller.length)
            }
        }

    return(
        <div className="thriller-Container">
            <h2>Thriller</h2>
            <button className="arrow-button" onClick={retreatHBOThrillerBelt}><i className="arrow left"></i></button>
            {renderHBOThriller.slice(hboThrillerBeltPosition, hboThrillerBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHBOThrillerBelt}><i className="arrow right"></i></button>
        </div>
    )
}

export default HBOThrillerContainer;