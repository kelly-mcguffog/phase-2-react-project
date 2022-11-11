import React, {useState} from "react";
import ContentCard from "./ContentCard";


function HBO({allContent}){

    const [hboDramaBeltPosition, setHBODramaBeltPosition] = useState(0)
    const [hboCrimeBeltPosition, setHBOCrimeBeltPosition] = useState(0)
    const [hboActionBeltPosition, setHBOActionBeltPosition] = useState(0)
    const [hboMysteryBeltPosition, setHBOMysteryBeltPosition] = useState(0)
    const [hboThrillerBeltPosition, setHBOThrillerBeltPosition] = useState(0)
    const [hboRomanceBeltPosition, setHBORomanceBeltPosition] = useState(0)
    const [hboSciFiBeltPosition, setHBOSciFiBeltPosition] = useState(0)
    
    const hboContent = allContent.filter(content => content.platform === "HBO Max")

    const displayHBODramas = hboContent.filter(content => content.genre === "Drama")
    const displayHBOCrime = hboContent.filter(content => content.genre === "Crime")
    const displayHBOAction = hboContent.filter(content => content.genre === "Action")
    const displayHBOMystery = hboContent.filter(content => content.genre === "Mystery")
    const displayHBOThriller = hboContent.filter(content => content.genre === "Thriller")
    const displayHBORomance = hboContent.filter(content => content.genre === "Romance")
    const displayHBOSciFi = hboContent.filter(content => content.genre === "Sci-Fi")

    const renderHBODramas = displayHBODramas.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHBOCrime = displayHBOCrime.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHBOAction = displayHBOAction.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHBOMystery = displayHBOMystery.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHBOThriller = displayHBOThriller.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHBORomance = displayHBORomance.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHBOSciFi = displayHBOSciFi.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHBODramaBelt(){
        setHBODramaBeltPosition((hboDramaBeltPosition + 3) % displayHBODramas.length)
      }
    function advanceHBOCrimeBelt(){
        setHBOCrimeBeltPosition((hboCrimeBeltPosition + 3) % displayHBOCrime.length)
    }
    function advanceHBOActionBelt(){
        setHBOActionBeltPosition((hboActionBeltPosition + 3) % displayHBOAction.length)
    }
    function advanceHBOMysteryBelt(){
        setHBOMysteryBeltPosition((hboMysteryBeltPosition + 3) % displayHBOMystery.length)
    }
    function advanceHBOThrillerBelt(){
        setHBOThrillerBeltPosition((hboThrillerBeltPosition + 3) % displayHBOThriller.length)
    }
    function advanceHBORomanceBelt(){
        setHBORomanceBeltPosition((hboRomanceBeltPosition + 3) % displayHBORomance.length)
    }
    function advanceHBOSciFiBelt(){
        setHBOSciFiBeltPosition((hboSciFiBeltPosition + 3) % displayHBOSciFi.length)
    }
   
    return(
        <div className="card-container">
            <h2>Drama</h2>
            {renderHBODramas.slice(hboDramaBeltPosition, hboDramaBeltPosition+3)}
            <button onClick={advanceHBODramaBelt}>more</button>
            
            <h2>Crime</h2>
            {renderHBOCrime.slice(hboCrimeBeltPosition, hboCrimeBeltPosition+3)}
            <button onClick={advanceHBOCrimeBelt}>more</button>

            <h2>Action</h2>
            {renderHBOAction.slice(hboActionBeltPosition, hboActionBeltPosition+3)}
            <button onClick={advanceHBOActionBelt}>more</button>

            <h2>Mystery</h2>
            {renderHBOMystery.slice(hboMysteryBeltPosition, hboMysteryBeltPosition+3)}
            <button onClick={advanceHBOMysteryBelt}>more</button>

            <h2>Thriller</h2>
            {renderHBOThriller.slice(hboThrillerBeltPosition, hboThrillerBeltPosition+3)}
            <button onClick={advanceHBOThrillerBelt}>more</button>

            <h2>Romance</h2>
            {renderHBORomance.slice(hboRomanceBeltPosition, hboRomanceBeltPosition+3)}
            <button onClick={advanceHBORomanceBelt}>more</button>

            <h2>Sci-Fi</h2>
            {renderHBOSciFi.slice(hboSciFiBeltPosition, hboSciFiBeltPosition+3)}
            <button onClick={advanceHBOSciFiBelt}>more</button>
            
        </div>
        )

}

export default HBO;