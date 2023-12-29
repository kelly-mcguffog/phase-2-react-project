import React from "react";

function StreamingButton({ streamingService, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <button className={`${streamingService.toLowerCase()}Button streamingButton`}>
        <i className="fa-solid fa-play"></i> Watch Now
      </button>
    </a>
  );
}

export default StreamingButton;
