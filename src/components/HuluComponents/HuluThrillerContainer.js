import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HuluThrillerContainer({displayHuluThriller}){
    const [huluThrillerBeltPosition, setHuluThrillerBeltPosition] = useState(0)
    const renderHuluThriller = displayHuluThriller.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHuluThrillerBelt(){
        if((displayHuluThriller.length % 5 !== 0) && ((displayHuluThriller.length - huluThrillerBeltPosition) < 10) && ((displayHuluThriller.length - huluThrillerBeltPosition) > 5)){
            setHuluThrillerBeltPosition(huluThrillerBeltPosition + ((displayHuluThriller.length % 5)))
        }else{
            setHuluThrillerBeltPosition((huluThrillerBeltPosition + 5) % displayHuluThriller.length)
        }
    }
    function retreatHuluThrillerBelt(){
        if(huluThrillerBeltPosition > 0){
            setHuluThrillerBeltPosition((huluThrillerBeltPosition - 5) % displayHuluThriller.length)
        }
    }

    return(
        <div className="thriller-Container">
            <h2>Thriller</h2>
            <button className="arrow-button" onClick={retreatHuluThrillerBelt}><i className="arrow left"></i></button>
            {renderHuluThriller.slice(huluThrillerBeltPosition, huluThrillerBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHuluThrillerBelt}><i className="arrow right"></i></button>
        </div>
    )
}

export default HuluThrillerContainer;