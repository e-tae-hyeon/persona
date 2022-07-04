import React from "react";
import HomeBoardView from "./view";

// eslint-disable-next-line react/display-name
const HomeBoard = React.forwardRef<HTMLDivElement>(({}, ref) => {
  return <HomeBoardView ref={ref} />;
});

export default HomeBoard;
