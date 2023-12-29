import React from "react";
import StreamingButton from "./StreamingButton";

function HuluButton() {
  const huluUrl = "https://www.hulu.com/welcome?orig_referrer=https%3A%2F%2Fwww.google.com%2F";

  return <StreamingButton streamingService="Hulu" url={huluUrl} />;
}

export default HuluButton;