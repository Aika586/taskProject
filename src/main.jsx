import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import News from "./pages/News";
import Events from "./pages/Events";
import About from "./pages/About";

import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "news",
    element: <News />,
  },
  {
    path: "calendar",
    element: <Events />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);
