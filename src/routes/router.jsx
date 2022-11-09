import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Secondary from "../layouts/secondary";
import AddService from "../pages/add-service";
import AllServices from "../pages/all-services";
import Home from "../pages/home";
import Login from "../pages/login";
import ServiceDetails from "../pages/service-details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Secondary />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/services", element: <AllServices /> },
          { path: "/service/:id", element: <ServiceDetails /> },
          { path: "/add-service", element: <AddService /> },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Login reg />,
      },
    ],
  },
]);
