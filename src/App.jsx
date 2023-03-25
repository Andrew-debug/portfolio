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
  return (
    <BrowserRouter>
      <Root
        isNavOpen={isNavOpen}
        setisNavOpen={setisNavOpen}
        setcontentClosingDelay={setcontentClosingDelay}
      />
      <AnimatedRoutes
        isNavOpen={isNavOpen}
        setisNavOpen={setisNavOpen}
        contentClosingDelay={contentClosingDelay}
      />
    </BrowserRouter>
  );
}
