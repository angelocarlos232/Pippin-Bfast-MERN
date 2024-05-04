import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Menu from "pages/Menu";
import Aboutus from "pages/Aboutus";
import Orderonline from "pages/Orderonline";
import Checkout from "pages/Checkout";
import Homepage from "pages/Homepage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "menu",
      element: <Menu />,
    },
    {
      path: "aboutus",
      element: <Aboutus />,
    },
    {
      path: "orderonline",
      element: <Orderonline />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "homepage",
      element: <Homepage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
