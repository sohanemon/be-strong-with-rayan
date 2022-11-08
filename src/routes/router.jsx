import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Secondary from "../layouts/secondary";
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
        children: [{ path: "/", element: <Home /> }],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Login register />,
      },
    ],
  },
]);
