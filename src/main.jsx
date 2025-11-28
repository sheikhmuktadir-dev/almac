import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// global css
import "./Style/index.css";
import "./Style/root.css";

// pages
import Layout from "./Layout.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import Home from "./Pages/Home/Home.jsx";
import FetchContextProvider from "./Context/FetchContextProvider.jsx";
import About from "./Pages/About/About.jsx";
import Properties from "./Pages/Properties/Properties.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Details from "./Pages/Details/Details.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "properties",
        element: <Properties />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "details/:url",
        element: <Details />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FetchContextProvider>
      <RouterProvider router={routes} />
    </FetchContextProvider>
  </StrictMode>
);
