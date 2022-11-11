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
        setNetflixDramaBeltPosition((netflixDramaBeltPosition + 3) % displayNetflixDramas.length)
      }
    function advanceNetflixCrimeBelt(){
        setNetflixCrimeBeltPosition((netflixCrimeBeltPosition + 3) % displayNetflixCrime.length)
    }
    function advanceNetflixActionBelt(){
        setNetflixActionBeltPosition((netflixActionBeltPosition + 3) % displayNetflixAction.length)
    }
    function advanceNetflixMysteryBelt(){
        setNetflixMysteryBeltPosition((netflixMysteryBeltPosition + 3) % displayNetflixMystery.length)
    }
    function advanceNetflixThrillerBelt(){
        setNetflixThrillerBeltPosition((netflixThrillerBeltPosition + 3) % displayNetflixThriller.length)
    }
    function advanceNetflixRomanceBelt(){
        setNetflixRomanceBeltPosition((netflixRomanceBeltPosition + 3) % displayNetflixRomance.length)
    }
    function advanceNetflixSciFiBelt(){
        setNetflixSciFiBeltPosition((netflixSciFiBeltPosition + 3) % displayNetflixSciFi.length)
    }
   
    return(
        <div className="card-container">
            <h2>Drama</h2>
            {renderNetflixDramas.slice(netflixDramaBeltPosition, netflixDramaBeltPosition+3)}
            <button onClick={advanceNetflixDramaBelt}>more</button>
            
            <h2>Crime</h2>
            {renderNetflixCrime.slice(netflixCrimeBeltPosition, netflixCrimeBeltPosition+3)}
            <button onClick={advanceNetflixCrimeBelt}>more</button>

            <h2>Action</h2>
            {renderNetflixAction.slice(netflixActionBeltPosition, netflixActionBeltPosition+3)}
            <button onClick={advanceNetflixActionBelt}>more</button>

            <h2>Mystery</h2>
            {renderNetflixMystery.slice(netflixMysteryBeltPosition, netflixMysteryBeltPosition+3)}
            <button onClick={advanceNetflixMysteryBelt}>more</button>

            <h2>Thriller</h2>
            {renderNetflixThriller.slice(netflixThrillerBeltPosition, netflixThrillerBeltPosition+3)}
            <button onClick={advanceNetflixThrillerBelt}>more</button>

            <h2>Romance</h2>
            {renderNetflixRomance.slice(netflixRomanceBeltPosition, netflixRomanceBeltPosition+3)}
            <button onClick={advanceNetflixRomanceBelt}>more</button>

            <h2>Sci-Fi</h2>
            {renderNetflixSciFi.slice(netflixSciFiBeltPosition, netflixSciFiBeltPosition+3)}
            <button onClick={advanceNetflixSciFiBelt}>more</button>
            
        </div>
        )
}

export default Netflix;