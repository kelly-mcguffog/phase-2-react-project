import React, {useState} from "react";
import ContentCard from "../ContentCard";

function RomanceContainer({displayRomance}){
    const [romanceBeltPosition, setRomanceBeltPosition] = useState(0)
    const renderRomance = displayRomance.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceRomanceBelt(){
        if((displayRomance.length % 5 !== 0) && ((displayRomance.length - romanceBeltPosition) < 10) && ((displayRomance.length - romanceBeltPosition) > 5)){
            setRomanceBeltPosition(romanceBeltPosition + ((displayRomance.length % 5)))
        }else{
            setRomanceBeltPosition((romanceBeltPosition + 5) % displayRomance.length)
        }
    }
    function retreatRomanceBelt(){
        if(romanceBeltPosition > 0){
            setRomanceBeltPosition((romanceBeltPosition - 5) % displayRomance.length)
        }
    }

    return(
            <div className="romance-Container">
                <h2>Romance</h2>
                <button className="arrow-button" onClick={retreatRomanceBelt}><i className="arrow left"></i></button>
                {renderRomance.slice(romanceBeltPosition, romanceBeltPosition+5)}
                <button className="arrow-button" onClick={advanceRomanceBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default RomanceContainer;