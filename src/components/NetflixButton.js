import React from "react";
import StreamingButton from "./StreamingButton";

function NetflixButton() {
  const netflixUrl = "https://www.netflix.com/";

  return <StreamingButton streamingService="Netflix" url={netflixUrl} />;
}

export default NetflixButton;
