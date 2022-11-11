import React from "react";
// import { ContentContext } from "../Context/Content";

function Container({ showDramaClips, showCrimeClips, showActionClips, showMysteryClips, showThrillerClips, showRomanceClips, showSciFiClips, advanceDramaBelt, advanceCrimeBelt, advanceActionBelt, advanceMysteryBelt, advanceThrillerBelt, advanceRomanceBelt, advanceSciFiBelt }){

    // const beltPosition = useContext(ContentContext)
    // console.log(beltPosition)

    return(
        <div className="card-container">
            <h2>Drama</h2>
            {showDramaClips}
            <button onClick={advanceDramaBelt}>more</button>
            
            <h2>Crime</h2>
            {showCrimeClips}
            <button onClick={advanceCrimeBelt}>more</button>

            <h2>Action</h2>
            {showActionClips}
            <button onClick={advanceActionBelt}>more</button>

            <h2>Mystery</h2>
            {showMysteryClips}
            <button onClick={advanceMysteryBelt}>more</button>

            <h2>Thriller</h2>
            {showThrillerClips}
            <button onClick={advanceThrillerBelt}>more</button>

            <h2>Romance</h2>
            {showRomanceClips}
            <button onClick={advanceRomanceBelt}>more</button>

            <h2>Sci-Fi</h2>
            {showSciFiClips}
            <button onClick={advanceSciFiBelt}>more</button>
            
        </div>
        )
}

export default Container;