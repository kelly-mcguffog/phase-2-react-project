import React, {useState, useContext} from "react";
import { ContentContext } from "../Context/Content";
import ContentCard from "./ContentCard";

function Container({allContent}){

    // const value = useContext(ContentContext)
    // console.log(value)

    const [dramaBeltPosition, setDramaBeltPosition] = useState(0)
    const [crimeBeltPosition, setCrimeBeltPosition] = useState(0)
    const [actionBeltPosition, setActionBeltPosition] = useState(0)
    const [mysteryBeltPosition, setMysteryBeltPosition] = useState(0)
    const [thrillerBeltPosition, setThrillerBeltPosition] = useState(0)
    const [romanceBeltPosition, setRomanceBeltPosition] = useState(0)
    const [sciFiBeltPosition, setSciFiBeltPosition] = useState(0)
    
    const displayDramas = allContent.filter(content => content.genre === "Drama")
    const displayCrime = allContent.filter(content => content.genre === "Crime")
    const displayAction = allContent.filter(content => content.genre === "Action")
    const displayMystery = allContent.filter(content => content.genre === "Mystery")
    const displayThriller = allContent.filter(content => content.genre === "Thriller")
    const displayRomance = allContent.filter(content => content.genre === "Romance")
    const displaySciFi = allContent.filter(content => content.genre === "Sci-Fi")

    const renderDramas = displayDramas.map(content => <ContentCard key={content.id} content={content}/>)
    const renderCrime = displayCrime.map(content => <ContentCard key={content.id} content={content}/>)
    const renderAction = displayAction.map(content => <ContentCard key={content.id} content={content}/>)
    const renderMystery = displayMystery.map(content => <ContentCard key={content.id} content={content}/>)
    const renderThriller = displayThriller.map(content => <ContentCard key={content.id} content={content}/>)
    const renderRomance = displayRomance.map(content => <ContentCard key={content.id} content={content}/>)
    const renderSciFi = displaySciFi.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceDramaBelt(){
        setDramaBeltPosition((dramaBeltPosition + 1) % displayDramas.length)
      }
    function advanceCrimeBelt(){
        setCrimeBeltPosition((crimeBeltPosition + 1) % displayCrime.length)
    }
    function advanceActionBelt(){
        setActionBeltPosition((actionBeltPosition + 1) % displayAction.length)
    }
    function advanceMysteryBelt(){
        setMysteryBeltPosition((mysteryBeltPosition + 1) % displayMystery.length)
    }
    function advanceThrillerBelt(){
        setThrillerBeltPosition((thrillerBeltPosition + 1) % displayThriller.length)
    }
    function advanceRomanceBelt(){
        setRomanceBeltPosition((romanceBeltPosition + 1) % displayRomance.length)
    }
    function advanceSciFiBelt(){
        setSciFiBeltPosition((sciFiBeltPosition + 1) % displaySciFi.length)
    }
      

    return(
        <div className="card-container">
            <h2>Drama</h2>
            {renderDramas.slice(dramaBeltPosition, dramaBeltPosition+6)}
            <button onClick={advanceDramaBelt}>more</button>
            
            <h2>Crime</h2>
            {renderCrime.slice(crimeBeltPosition, crimeBeltPosition+3)}
            <button onClick={advanceCrimeBelt}>more</button>

            <h2>Action</h2>
            {renderAction.slice(actionBeltPosition, actionBeltPosition+3)}
            <button onClick={advanceActionBelt}>more</button>

            <h2>Mystery</h2>
            {renderMystery.slice(mysteryBeltPosition, mysteryBeltPosition+3)}
            <button onClick={advanceMysteryBelt}>more</button>

            <h2>Thriller</h2>
            {renderThriller.slice(thrillerBeltPosition, thrillerBeltPosition+3)}
            <button onClick={advanceThrillerBelt}>more</button>

            <h2>Romance</h2>
            {renderRomance.slice(romanceBeltPosition, romanceBeltPosition+3)}
            <button onClick={advanceRomanceBelt}>more</button>

            <h2>Sci-Fi</h2>
            {renderSciFi.slice(sciFiBeltPosition, sciFiBeltPosition+3)}
            <button onClick={advanceSciFiBelt}>more</button>
            
        </div>
        )
}

export default Container;