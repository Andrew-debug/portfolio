import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Root from "./routes/Root.jsx";
// import ErrorPage from "./routes/ErrorPage.jsx";
import AnimationLayout from "./components/AnimationLayout";
import AnimatedRoutes from "./components/AnimatedRoutes";

export default function App() {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [contentClosingDelay, setcontentClosingDelay] = useState(false);
  const [openingContent, setopeningContent] = useState(false);
  const [frameAllContent, setframeAllContent] = useState(false);
  return (
    <div style={frameAllContent ? { height: "100vh", overflow: "hidden" } : {}}>
      <BrowserRouter>
        <Root
          isNavOpen={isNavOpen}
          setisNavOpen={setisNavOpen}
          setcontentClosingDelay={setcontentClosingDelay}
          setopeningContent={setopeningContent}
          setframeAllContent={setframeAllContent}
        />
        <AnimatedRoutes
          isNavOpen={isNavOpen}
          setisNavOpen={setisNavOpen}
          contentClosingDelay={contentClosingDelay}
          setcontentClosingDelay={setcontentClosingDelay}
          openingContent={openingContent}
        />
      </BrowserRouter>
    </div>
  );
}
