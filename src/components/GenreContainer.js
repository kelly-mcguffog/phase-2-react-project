import React, { useState } from "react";
import ContentCard from "./ContentCard";

const GenreContainer = ({ genre, allContent, handleEditMedia, setSearch }) => {
  const [beltPosition, setBeltPosition] = useState(0);

  const contentByGenre = allContent.filter((content) => content.genre === genre);

  const remainingContent = contentByGenre.length - beltPosition;

  const renderContent = contentByGenre.map((content) => (
    <ContentCard
      key={content.id}
      content={content}
      setSearch={setSearch}
      handleEditMedia={handleEditMedia}
    />
  ));

  const advanceBelt = () => {
    const newPosition = beltPosition + 6;
    setBeltPosition(Math.min(newPosition, contentByGenre.length - 6));
  };

  const retreatBelt = () => {
    const newPosition = Math.max(0, beltPosition - 6);
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
          <div className="forward" onClick={advanceBelt} disabled={remainingContent <= 6}>
            <i className="arrow right"></i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="arrow-button" onClick={retreatBelt}>
          {contentByGenre.length > 6 && beltPosition > 0 ? (
            <i className="fa-sharp fa-solid fa-circle-chevron-left"></i>
          ) : null}
        </div>
        {renderContent.slice(beltPosition, beltPosition + 6)}
        <div className="arrow-button" onClick={advanceBelt} disabled={remainingContent <= 6}>
          {remainingContent > 6 ? (
            <i className="fa-sharp fa-solid fa-circle-chevron-right"></i>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default GenreContainer;
