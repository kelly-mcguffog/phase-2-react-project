import React, {useState} from "react";
import ContentCard from "./ContentCard";


function Netflix({allContent}){
    const [netflixDramaBeltPosition, setNetflixDramaBeltPosition] = useState(0)
    const [netflixCrimeBeltPosition, setNetflixCrimeBeltPosition] = useState(0)
    const [netflixActionBeltPosition, setNetflixActionBeltPosition] = useState(0)
    const [netflixMysteryBeltPosition, setNetflixMysteryBeltPosition] = useState(0)
    const [netflixThrillerBeltPosition, setNetflixThrillerBeltPosition] = useState(0)
    const [netflixRomanceBeltPosition, setNetflixRomanceBeltPosition] = useState(0)
    const [netflixSciFiBeltPosition, setNetflixSciFiBeltPosition] = useState(0)
    
    const netflixContent = allContent.filter(content => content.platform === "Netflix")

    const displayNetflixDramas = netflixContent.filter(content => content.genre === "Drama")
    const displayNetflixCrime = netflixContent.filter(content => content.genre === "Crime")
    const displayNetflixAction = netflixContent.filter(content => content.genre === "Action")
    const displayNetflixMystery = netflixContent.filter(content => content.genre === "Mystery")
    const displayNetflixThriller = netflixContent.filter(content => content.genre === "Thriller")
    const displayNetflixRomance = netflixContent.filter(content => content.genre === "Romance")
    const displayNetflixSciFi = netflixContent.filter(content => content.genre === "Sci-Fi")

    const renderNetflixDramas = displayNetflixDramas.map(content => <ContentCard key={content.id} content={content}/>)
    const renderNetflixCrime = displayNetflixCrime.map(content => <ContentCard key={content.id} content={content}/>)
    const renderNetflixAction = displayNetflixAction.map(content => <ContentCard key={content.id} content={content}/>)
    const renderNetflixMystery = displayNetflixMystery.map(content => <ContentCard key={content.id} content={content}/>)
    const renderNetflixThriller = displayNetflixThriller.map(content => <ContentCard key={content.id} content={content}/>)
    const renderNetflixRomance = displayNetflixRomance.map(content => <ContentCard key={content.id} content={content}/>)
    const renderNetflixSciFi = displayNetflixSciFi.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceNetflixDramaBelt(){
        if((displayNetflixDramas.length % 5 !== 0) && ((displayNetflixDramas.length - netflixDramaBeltPosition) < 10) && ((displayNetflixDramas.length - netflixDramaBeltPosition) > 5)){
            setNetflixDramaBeltPosition(netflixDramaBeltPosition + ((displayNetflixDramas.length % 5)))
        }else{
            setNetflixDramaBeltPosition((netflixDramaBeltPosition + 5) % displayNetflixDramas.length)
        }
        // setNetflixDramaBeltPosition((netflixDramaBeltPosition + 5) % displayNetflixDramas.length)
      }
      function retreatNetflixDramaBelt(){
        if(netflixDramaBeltPosition > 0){
            setNetflixDramaBeltPosition((netflixDramaBeltPosition - 5) % displayNetflixDramas.length)
        }
      }
    function advanceNetflixCrimeBelt(){
        if((displayNetflixCrime.length % 5 !== 0) && ((displayNetflixCrime.length - netflixCrimeBeltPosition) < 10) && ((displayNetflixCrime.length - netflixCrimeBeltPosition) > 5)){
            setNetflixCrimeBeltPosition(netflixCrimeBeltPosition + ((displayNetflixCrime.length % 5)))
        }else{
            setNetflixCrimeBeltPosition((netflixCrimeBeltPosition + 5) % displayNetflixCrime.length)
        }
        // setNetflixCrimeBeltPosition((netflixCrimeBeltPosition + 5) % displayNetflixCrime.length)
    }
    function retreatNetflixCrimeBelt(){
        if(netflixCrimeBeltPosition > 0){
            setNetflixCrimeBeltPosition((netflixCrimeBeltPosition - 5) % displayNetflixCrime.length)
        }
    }
    function advanceNetflixActionBelt(){
        if((displayNetflixAction.length % 5 !== 0) && ((displayNetflixAction.length - netflixActionBeltPosition) < 10) && ((displayNetflixAction.length - netflixActionBeltPosition) > 5)){
            setNetflixActionBeltPosition(netflixActionBeltPosition + ((displayNetflixAction.length % 5)))
        }else{
            setNetflixActionBeltPosition((netflixActionBeltPosition + 5) % displayNetflixAction.length)
        }
        // setNetflixActionBeltPosition((netflixActionBeltPosition + 5) % displayNetflixAction.length)
    }
    function retreatNetflixActionBelt(){
        if(netflixActionBeltPosition > 0){
            setNetflixActionBeltPosition((netflixActionBeltPosition - 5) % displayNetflixAction.length)
        }
    }
    function advanceNetflixMysteryBelt(){
        if((displayNetflixMystery.length % 5 !== 0) && ((displayNetflixMystery.length - netflixMysteryBeltPosition) < 10) && ((displayNetflixMystery.length - netflixMysteryBeltPosition) > 5)){
            setNetflixMysteryBeltPosition(netflixMysteryBeltPosition + ((displayNetflixMystery.length % 5)))
        }else{
            setNetflixMysteryBeltPosition((netflixMysteryBeltPosition + 5) % displayNetflixMystery.length)
        }
        // setNetflixMysteryBeltPosition((netflixMysteryBeltPosition + 5) % displayNetflixMystery.length)
    }
    function retreatNetflixMysteryBelt(){
        if(netflixMysteryBeltPosition > 0){
            setNetflixMysteryBeltPosition((netflixMysteryBeltPosition - 5) % displayNetflixMystery.length)
        }
    }
    function advanceNetflixThrillerBelt(){
        if((displayNetflixThriller.length % 5 !== 0) && ((displayNetflixThriller.length - netflixThrillerBeltPosition) < 10) && ((displayNetflixThriller.length - netflixThrillerBeltPosition) > 5)){
            setNetflixThrillerBeltPosition(netflixThrillerBeltPosition + ((displayNetflixThriller.length % 5)))
        }else{
            setNetflixThrillerBeltPosition((netflixThrillerBeltPosition + 5) % displayNetflixThriller.length)
        }
        // setNetflixThrillerBeltPosition((netflixThrillerBeltPosition + 5) % displayNetflixThriller.length)
    }
    function retreatNetflixThrillerBelt(){
        if(netflixThrillerBeltPosition > 0){
            setNetflixThrillerBeltPosition((netflixThrillerBeltPosition - 5) % displayNetflixThriller.length)
        }
    }
    function advanceNetflixRomanceBelt(){
        if((displayNetflixRomance.length % 5 !== 0) && ((displayNetflixRomance.length - netflixRomanceBeltPosition) < 10) && ((displayNetflixRomance.length - netflixRomanceBeltPosition) > 5)){
            setNetflixRomanceBeltPosition(netflixRomanceBeltPosition + ((displayNetflixRomance.length % 5)))
        }else{
            setNetflixRomanceBeltPosition((netflixRomanceBeltPosition + 5) % displayNetflixRomance.length)
        }
        // setNetflixRomanceBeltPosition((netflixRomanceBeltPosition + 5) % displayNetflixRomance.length)
    }
    function retreatNetflixRomanceBelt(){
        if(netflixRomanceBeltPosition > 0){
            setNetflixRomanceBeltPosition((netflixRomanceBeltPosition - 5) % displayNetflixRomance.length)
        }
    }
    function advanceNetflixSciFiBelt(){
        if((displayNetflixSciFi.length % 5 !== 0) && ((displayNetflixSciFi.length - netflixSciFiBeltPosition) < 10) && ((displayNetflixSciFi.length - netflixSciFiBeltPosition) > 5)){
            setNetflixSciFiBeltPosition(netflixSciFiBeltPosition + ((displayNetflixSciFi.length % 5)))
        }else{
            setNetflixSciFiBeltPosition((netflixSciFiBeltPosition + 5) % displayNetflixSciFi.length)
        }
        // setNetflixSciFiBeltPosition((netflixSciFiBeltPosition + 5) % displayNetflixSciFi.length)
    }
    function retreatNetflixSciFiBelt(){
        if(netflixSciFiBeltPosition > 0){
            setNetflixSciFiBeltPosition((netflixSciFiBeltPosition - 5) % displayNetflixSciFi.length)
        }
    }
   
    return(
        <div className="card-container">
            <h2>Drama</h2>
            <button className="arrow-button" onClick={retreatNetflixDramaBelt}><i className="arrow left"></i></button>
            {renderNetflixDramas.slice(netflixDramaBeltPosition, netflixDramaBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixDramaBelt}><i className="arrow right"></i></button>
            
            <h2>Crime</h2>
            <button className="arrow-button" onClick={retreatNetflixCrimeBelt}><i className="arrow left"></i></button>
            {renderNetflixCrime.slice(netflixCrimeBeltPosition, netflixCrimeBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixCrimeBelt}><i className="arrow right"></i></button>

            <h2>Action</h2>
            <button className="arrow-button" onClick={retreatNetflixActionBelt}><i className="arrow left"></i></button>
            {renderNetflixAction.slice(netflixActionBeltPosition, netflixActionBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixActionBelt}><i className="arrow right"></i></button>

            <h2>Mystery</h2>
            <button className="arrow-button" onClick={retreatNetflixMysteryBelt}><i className="arrow left"></i></button>
            {renderNetflixMystery.slice(netflixMysteryBeltPosition, netflixMysteryBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixMysteryBelt}><i className="arrow right"></i></button>

            <h2>Thriller</h2>
            <button className="arrow-button" onClick={retreatNetflixThrillerBelt}><i className="arrow left"></i></button>
            {renderNetflixThriller.slice(netflixThrillerBeltPosition, netflixThrillerBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixThrillerBelt}><i className="arrow right"></i></button>

            <h2>Romance</h2>
            <button className="arrow-button" onClick={retreatNetflixRomanceBelt}><i className="arrow left"></i></button>
            {renderNetflixRomance.slice(netflixRomanceBeltPosition, netflixRomanceBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixRomanceBelt}><i className="arrow right"></i></button>

            <h2>Sci-Fi</h2>
            <button className="arrow-button" onClick={retreatNetflixSciFiBelt}><i className="arrow left"></i></button>
            {renderNetflixSciFi.slice(netflixSciFiBeltPosition, netflixSciFiBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixSciFiBelt}><i className="arrow right"></i></button>
            
        </div>
        )
}

export default Netflix;