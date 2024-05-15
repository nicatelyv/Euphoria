import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router"
import "./i18n"


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
