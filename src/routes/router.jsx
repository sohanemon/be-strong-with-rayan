import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Secondary from "../layouts/secondary";
import AddService from "../pages/add-service";
import AllServices from "../pages/all-services";
import Home from "../pages/home";
import Login from "../pages/login";

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
