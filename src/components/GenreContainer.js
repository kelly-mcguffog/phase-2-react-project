import React, { useState } from "react";
import ContentCard from "./ContentCard";

const GenreContainer = ({ genre, allContent, handleEditMedia, setSearch  }) => {
  const [beltPosition, setBeltPosition] = useState(0);

  const contentByGenre = allContent.filter(content => content.genre === genre)


  const renderContent = contentByGenre.map((content) => (
    <ContentCard key={content.id} content={content} setSearch={setSearch} handleEditMedia={handleEditMedia} />
  ));

  const advanceBelt = () => {
    const newPosition =
      (beltPosition + 6) % allContent.length || allContent.length - 6;
    setBeltPosition(newPosition);
  };

  const retreatBelt = () => {
    const newPosition = (beltPosition - 6 + allContent.length) % allContent.length;
    setBeltPosition(newPosition);
  };

  return (
    <div className="media-container">
      <div className="genre-header">
        <h2>{genre}</h2>
        <div className="mobileBtns">
          <div className="back" onClick={retreatBelt}>
            <i className="arrow left"></i>
          </div>
          <div className="forward" onClick={advanceBelt}>
            <i className="arrow right"></i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="arrow-button" onClick={retreatBelt}>
          {allContent.length > 6 ? (
            <i className="fa-sharp fa-solid fa-circle-chevron-left"></i>
          ) : null}
        </div>
        {renderContent.slice(beltPosition, beltPosition + 6)}
        <div className="arrow-button" onClick={advanceBelt}>
          {allContent.length > 6 ? (
            <i className="fa-sharp fa-solid fa-circle-chevron-right"></i>
          ) : null}
        </div>
      </div>
    </div>
  );
};

  
  export default GenreContainer;