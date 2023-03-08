import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ErrorPage from "./pages/error-page";
import { routes } from "./routes";

const router = createBrowserRouter([
  {
    path: routes.home.href,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routes.about.href,
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
