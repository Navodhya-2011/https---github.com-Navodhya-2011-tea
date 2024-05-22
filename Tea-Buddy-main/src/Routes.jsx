import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AnalyticsTwo from "pages/AnalyticsTwo";
import Analytics from "pages/Analytics";
import AnalyticsOne from "pages/AnalyticsOne";
import Dashboard from "pages/Dashboard";
import Trough from "pages/Trough";
import Addtrough from "pages/Addtrough";
import Updatetrough from "modals/Updatetrough";
import TeaGrade from "pages/TeaGrade";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "*", element: <NotFound /> },
    {
      path: "analyticstwo",
      element: <AnalyticsTwo />,
    },
    {
      path: "analytics",
      element: <Analytics />,
    },
    {
      path: "analyticsone",
      element: <AnalyticsOne />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "trough",
      element: <Trough />,
    },
    {
      path: "addtrough",
      element: <Addtrough />,
    },
    {
      path: "updatethrough",
      element: <Updatetrough />
    },
    {
      path: "teagradepredictor",
      element: <TeaGrade />
    },
  ]);

  return element;
};

export default ProjectRoutes;
