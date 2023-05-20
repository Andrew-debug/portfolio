import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion";
import AnimationLayout from "./AnimationLayout";
import ErrorPage from "../routes/ErrorPage.jsx";

export default function AnimatedRoutes({
  isNavOpen,
  setisNavOpen,
  contentClosingDelay,
  setcontentClosingDelay,
  openingContent,
  setopeningContent,
  setframeAllContent,
}) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          element={
            <AnimationLayout
              isNavOpen={isNavOpen}
              setisNavOpen={setisNavOpen}
              contentClosingDelay={contentClosingDelay}
              setcontentClosingDelay={setcontentClosingDelay}
              openingContent={openingContent}
            />
          }
        >
          <Route
            path="/"
            element={
              <Home
                setopeningContent={setopeningContent}
                setframeAllContent={setframeAllContent}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                setopeningContent={setopeningContent}
                setframeAllContent={setframeAllContent}
              />
            }
          />
          <Route
            path="/portfolio"
            element={
              <Portfolio
                setopeningContent={setopeningContent}
                setframeAllContent={setframeAllContent}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
