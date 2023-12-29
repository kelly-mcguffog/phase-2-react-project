import React from "react";
import StreamingButton from "./StreamingButton";

function HBOButton() {
  const hboUrl = "https://www.hbomax.com/";

  return <StreamingButton streamingService="HBO" url={hboUrl} />;
}

export default HBOButton;
