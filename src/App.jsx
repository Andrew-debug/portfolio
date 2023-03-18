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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root isNavOpen={isNavOpen} setisNavOpen={setisNavOpen} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home isNavOpen={isNavOpen} />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
