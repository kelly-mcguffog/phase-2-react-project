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
        if(dramaBeltPosition <= displayDramas.length){
            setDramaBeltPosition((dramaBeltPosition + 5) % displayDramas.length)
        }
      }
      function retreatDramaBelt(){
        if(dramaBeltPosition > 0){
            setDramaBeltPosition((dramaBeltPosition - 5) % displayDramas.length)
        }
      }
    function advanceCrimeBelt(){
        if(crimeBeltPosition <= displayCrime.length){
            setCrimeBeltPosition((crimeBeltPosition + 5) % displayCrime.length)
        }
    }
    function retreatCrimeBelt(){
        if(crimeBeltPosition > 0){
            setCrimeBeltPosition((crimeBeltPosition - 5) % displayCrime.length)
        }
    }
    function advanceActionBelt(){
        if(actionBeltPosition <= displayAction.length){
            setActionBeltPosition((actionBeltPosition + 5) % displayAction.length)
        }
    }
    function retreatActionBelt(){
        if(actionBeltPosition > 0){
            setActionBeltPosition((actionBeltPosition - 5) % displayAction.length)
        }
    }
    function advanceMysteryBelt(){
        if(mysteryBeltPosition <= displayMystery.length){
            setMysteryBeltPosition((mysteryBeltPosition + 5) % displayMystery.length)
        }
    }
    function retreatMysteryBelt(){
        if(mysteryBeltPosition > 0){
            setMysteryBeltPosition((mysteryBeltPosition - 5) % displayMystery.length)
        }
    }
    function advanceThrillerBelt(){
        if(thrillerBeltPosition <= displayThriller.length){
            setThrillerBeltPosition((thrillerBeltPosition + 5) % displayThriller.length)
        }
    }
    function retreatThrillerBelt(){
        if(thrillerBeltPosition > 0){
            setThrillerBeltPosition((thrillerBeltPosition - 5) % displayThriller.length)
        }
    }
    function advanceRomanceBelt(){
        if(romanceBeltPosition <= displayRomance.length){
            setRomanceBeltPosition((romanceBeltPosition + 5) % displayRomance.length)
        }
    }
    function retreatRomanceBelt(){
        if(romanceBeltPosition > 0){
            setRomanceBeltPosition((romanceBeltPosition - 5) % displayRomance.length)
        }
    }
    function advanceSciFiBelt(){
        if(sciFiBeltPosition <= displaySciFi.length){
            setSciFiBeltPosition((sciFiBeltPosition + 5) % displaySciFi.length)
        }
    }
    function retreatSciFiBelt(){
        if(sciFiBeltPosition > 0){
            setSciFiBeltPosition((sciFiBeltPosition - 5) % displaySciFi.length)
        }
    }
      

    return(
        <div className="card-container">
            <h2>Drama</h2>
            <button className="arrow-button" onClick={retreatDramaBelt}><i className="arrow left"></i></button>
            {renderDramas.slice(dramaBeltPosition, dramaBeltPosition+5)}
            <button className="arrow-button" onClick={advanceDramaBelt}><i className="arrow right"></i></button>
            
            <h2>Crime</h2>
            <button className="arrow-button" onClick={retreatCrimeBelt}><i className="arrow left"></i></button>
            {renderCrime.slice(crimeBeltPosition, crimeBeltPosition+5)}
            <button className="arrow-button" onClick={advanceCrimeBelt}><i className="arrow right"></i></button>

            <h2>Action</h2>
            <button className="arrow-button" onClick={retreatActionBelt}><i className="arrow left"></i></button>
            {renderAction.slice(actionBeltPosition, actionBeltPosition+5)}
            <button className="arrow-button" onClick={advanceActionBelt}><i className="arrow right"></i></button>

            <h2>Mystery</h2>
            <button className="arrow-button" onClick={retreatMysteryBelt}><i className="arrow left"></i></button>
            {renderMystery.slice(mysteryBeltPosition, mysteryBeltPosition+5)}
            <button className="arrow-button" onClick={advanceMysteryBelt}><i className="arrow right"></i></button>

            <h2>Thriller</h2>
            <button className="arrow-button" onClick={retreatThrillerBelt}><i className="arrow left"></i></button>
            {renderThriller.slice(thrillerBeltPosition, thrillerBeltPosition+5)}
            <button className="arrow-button" onClick={advanceThrillerBelt}><i className="arrow right"></i></button>

            <h2>Romance</h2>
            <button className="arrow-button" onClick={retreatRomanceBelt}><i className="arrow left"></i></button>
            {renderRomance.slice(romanceBeltPosition, romanceBeltPosition+5)}
            <button className="arrow-button" onClick={advanceRomanceBelt}><i className="arrow right"></i></button>

            <h2>Sci-Fi</h2>
            <button className="arrow-button" onClick={retreatSciFiBelt}><i className="arrow left"></i></button>
            {renderSciFi.slice(sciFiBeltPosition, sciFiBeltPosition+5)}
            <button className="arrow-button" onClick={advanceSciFiBelt}><i className="arrow right"></i></button>
            
        </div>
        )
}

export default Container;