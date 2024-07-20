import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js";
import Body from "./body.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Error from "./Error.js";
import Restaurantmenu from "./Restaurantmenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurantmenu />,
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
