import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Root from "./routes/Root.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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

const Container = styled.div`
  height: 100vh;
  background: #16203a;
`;

const Nav = styled.nav`
  width: 200px;
  height: 100vh;
`;

const List = styled.ul`
  width: 200px;
  height: 100vh;
`;

const ListItem = styled.li`
  width: 200px;
  height: 100vh;
`;

const Link = styled.a`
  width: 200px;
  height: 100vh;
`;

export default function App() {
  return <RouterProvider router={router} />;
}
