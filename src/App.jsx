import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import Root from "./routes/Root.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [contentClosingDelay, setcontentClosingDelay] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Root
          isNavOpen={isNavOpen}
          setisNavOpen={setisNavOpen}
          setcontentClosingDelay={setcontentClosingDelay}
        />
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: (
            <Home
              isNavOpen={isNavOpen}
              setisNavOpen={setisNavOpen}
              contentClosingDelay={contentClosingDelay}
            />
          ),
        },
        {
          path: "/about",
          element: (
            <About
              isNavOpen={isNavOpen}
              setisNavOpen={setisNavOpen}
              contentClosingDelay={contentClosingDelay}
            />
          ),
        },
        {
          path: "/portfolio",
          element: (
            <Portfolio
              isNavOpen={isNavOpen}
              setisNavOpen={setisNavOpen}
              contentClosingDelay={contentClosingDelay}
            />
          ),
        },
        {
          path: "/contact",
          element: (
            <Contact
              isNavOpen={isNavOpen}
              setisNavOpen={setisNavOpen}
              contentClosingDelay={contentClosingDelay}
            />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
