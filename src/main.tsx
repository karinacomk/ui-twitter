import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./global.css";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode> avisa sobre possíveis erros, recomendável deixar
  // programação declarativa
  // foreach não tem retorno VS map tem retorno
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
